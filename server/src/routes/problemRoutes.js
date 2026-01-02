const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');

// Public routes (no auth required to view problems)
router.get('/', problemController.getAllProblems);
router.get('/:slug', problemController.getProblemBySlug);

module.exports = router;
