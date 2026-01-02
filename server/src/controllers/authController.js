const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.loginUser = async (req, res) => {
    // req.user is populated by authMiddleware (Firebase)
    const { uid, email, name, picture } = req.user;

    try {
        console.log(`Trying to login user: ${email} (${uid})`);

        // Check if user exists
        const result = await db.query('SELECT * FROM users WHERE firebase_uid = ?', [uid]);

        if (result.rows.length === 0) {
            console.log('User not found, creating new user...');
            const newId = uuidv4();
            const username = email.split('@')[0];

            // New User -> Create Record
            await db.query(
                'INSERT INTO users (id, firebase_uid, email, username, full_name, profile_picture) VALUES (?, ?, ?, ?, ?, ?)',
                [newId, uid, email, username, name || username, picture || '']
            );

            // Fetch the user we just created
            const newUser = await db.query('SELECT * FROM users WHERE id = ?', [newId]);
            return res.status(201).json({ message: 'User created', user: newUser.rows[0] });
        } else {
            console.log('User found:', result.rows[0].username);
            // Existing User -> Return details
            return res.status(200).json({ message: 'Login successful', user: result.rows[0] });
        }
    } catch (error) {
        console.error('Database Error in loginUser:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getMe = async (req, res) => {
    const { uid } = req.user;
    try {
        const result = await db.query('SELECT * FROM users WHERE firebase_uid = ?', [uid]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Database Error in getMe:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
