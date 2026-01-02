const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

router.post('/login', verifyToken, authController.loginUser);
router.get('/me', verifyToken, authController.getMe);

module.exports = router;
