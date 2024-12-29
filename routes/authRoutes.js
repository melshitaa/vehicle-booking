const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    findUserByUsername(username, (err, result) => {
        if (err) return res.status(500).send('Database error');
        if (result.length === 0) return res.status(401).send('User not found');

        const user = result[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.send({ auth: true, token });
    });
});

module.exports = router;
