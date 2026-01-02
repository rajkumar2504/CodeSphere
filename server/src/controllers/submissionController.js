const { query } = require('../config/db');
const executor = require('../services/executorService');
const { v4: uuidv4 } = require('uuid');

exports.submitCode = async (req, res) => {
    const { problemId, code, language, slug } = req.body;
    // user_id would come from req.user.id if auth was enabled/enforced for this route
    // For MVP transparency, we might just allow anonymous or use a temp ID
    const userId = req.user ? req.user.uid : 'anon';

    try {
        // 1. Get Problem & Test Cases
        const problemRes = await query('SELECT * FROM problems WHERE slug = ?', [slug]);
        if (problemRes.rows.length === 0) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        const problem = problemRes.rows[0];
        const testCases = JSON.parse(problem.test_cases || '[]');

        // 2. Execute Code
        const executionResult = await executor.executeCode(language, code, testCases);

        // 3. Save Submission (Optional for now, but good practice)
        // We need user_id to insert into submissions table, if we don't have one we skip or use dummy
        if (req.user) {
            const submissionId = uuidv4();
            // We need to look up internal user UUID from the firebase_uid
            const userRes = await query('SELECT id FROM users WHERE firebase_uid = ?', [userId]);

            if (userRes.rows.length > 0) {
                const internalUserId = userRes.rows[0].id;
                await query(`
                    INSERT INTO submissions (id, user_id, problem_id, code, language, status, runtime_ms)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                 `, [submissionId, internalUserId, problem.id, code, language, executionResult.status, 50]); // Fake runtime 50ms
            }
        }

        res.json(executionResult);

    } catch (error) {
        console.error('Submission Error:', error);
        res.status(500).json({ error: 'Evaluation failed' });
    }
};
exports.runPlayground = async (req, res) => {
    const { code, language } = req.body;

    try {
        // Execute with empty test cases array to trigger Script Mode
        const executionResult = await executor.executeCode(language, code, []);
        res.json(executionResult);
    } catch (error) {
        console.error('Playground Error:', error);
        res.status(500).json({ status: 'error', message: 'Server execution failed' });
    }
};
