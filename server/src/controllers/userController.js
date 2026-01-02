const { query } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.getUserProfile = async (req, res) => {
    // Authenticated user from verifyToken middleware
    const { uid } = req.user;

    try {
        // 1. Get User Details
        let userRes = await query('SELECT * FROM users WHERE firebase_uid = ?', [uid]);

        // DEMO MODE: Auto-create demo user if missing
        if (userRes.rows.length === 0 && uid === 'demo-user-123') {
            const newId = uuidv4();
            await query(
                `INSERT INTO users (id, firebase_uid, email, username, full_name, profile_picture) VALUES (?, ?, ?, ?, ?, ?)`,
                [newId, uid, 'demo@codesphere.com', 'demouser', 'Demo User', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix']
            );
            userRes = await query('SELECT * FROM users WHERE firebase_uid = ?', [uid]);
        }

        if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        const user = userRes.rows[0];

        // 2. Get Statistics
        // Solved count (unique problems solved)
        const solvedRes = await query(`
            SELECT COUNT(DISTINCT problem_id) as count 
            FROM submissions 
            WHERE user_id = ? AND status = 'Accepted'
        `, [user.id]);

        // Count by Difficulty
        const difficultiesRes = await query(`
            SELECT p.difficulty, COUNT(DISTINCT s.problem_id) as count
            FROM submissions s
            JOIN problems p ON s.problem_id = p.id
            WHERE s.user_id = ? AND s.status = 'Accepted'
            GROUP BY p.difficulty
        `, [user.id]);

        // Recent Submissions
        const recentRes = await query(`
            SELECT s.id, p.title, p.slug, s.status, s.language, s.created_at
            FROM submissions s
            JOIN problems p ON s.problem_id = p.id
            WHERE s.user_id = ?
            ORDER BY s.created_at DESC
            LIMIT 5
        `, [user.id]);

        // Format difficulty counts
        const stats = {
            total: solvedRes.rows[0].count,
            easy: 0,
            medium: 0,
            hard: 0
        };

        difficultiesRes.rows.forEach(row => {
            if (row.difficulty) { // Check strictly
                stats[row.difficulty.toLowerCase()] = row.count;
            }
        });

        res.json({
            user: {
                username: user.username,
                email: user.email,
                full_name: user.full_name,
                picture: user.profile_picture,
                joined: user.created_at
            },
            stats,
            recentSubmissions: recentRes.rows
        });

    } catch (error) {
        console.error('Profile Error:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};
