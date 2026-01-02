const admin = require('../config/firebase');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // DEMO MODE: Accept mock token
    if (token === 'mock-token-123') {
        req.user = { uid: 'demo-user-123', email: 'demo@codesphere.com' };
        return next();
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Attach user info to request
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        // Allow guest access if token is invalid, but don't set req.user
        // return res.status(403).json({ error: 'Unauthorized: Invalid token' });
        next();
    }
};

module.exports = verifyToken;
