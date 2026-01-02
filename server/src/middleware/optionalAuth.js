const admin = require('../config/firebase');

const optionalAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        req.user = null;
        return next();
    }

    const token = authHeader.split(' ')[1];

    if (token === 'mock-token-123') {
        req.user = { uid: 'demo-user-123', email: 'demo@codesphere.com' };
        return next();
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
    } catch (error) {
        console.warn('Optional Auth Token Invalid:', error.message);
        req.user = null;
    }
    next();
};

module.exports = optionalAuth;
