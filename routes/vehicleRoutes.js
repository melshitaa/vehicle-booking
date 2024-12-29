const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('List of vehicles');
});

// Add protected routes later when verifyToken is configured properly
router.get('/protected', (req, res) => {
    res.send('This is a protected route.');
});

module.exports = router;
