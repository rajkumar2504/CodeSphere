const { db, query } = require('../config/db');

// Get all problems (summary only)
exports.getAllProblems = async (req, res) => {
    try {
        const result = await query('SELECT id, title, slug, difficulty, category, created_at FROM problems');
        // Transform for frontend if needed (e.g. parse JSON tags)
        /* 
           If company_tags was stored as JSON string, we might want to parse it here, 
           but for the list view, raw data or just simple fields are enough.
        */
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching problems:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get single problem by slug
exports.getProblemBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const result = await query('SELECT * FROM problems WHERE slug = ?', [slug]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Problem not found' });
        }

        const problem = result.rows[0];
        // Parse JSON fields
        problem.company_tags = JSON.parse(problem.company_tags || '[]');
        problem.constraints = JSON.parse(problem.constraints || '[]');
        problem.starter_code = JSON.parse(problem.starter_code || '{}');
        problem.test_cases = JSON.parse(problem.test_cases || '[]');

        res.json(problem);
    } catch (error) {
        console.error('Error fetching problem:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
