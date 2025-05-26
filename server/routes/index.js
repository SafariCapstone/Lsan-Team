const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/indexController');

// @route   GET /
// @desc    Test route to confirm backend is running
// @access  Public
router.get('/', getHome);

module.exports = router;
