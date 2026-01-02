const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const verifyToken = require('../middleware/authMiddleware');

const optionalAuth = require('../middleware/optionalAuth');

router.post('/', optionalAuth, submissionController.submitCode);
router.post('/run', optionalAuth, submissionController.runPlayground);

module.exports = router;
