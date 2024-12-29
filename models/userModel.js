const db = require('../config/db');

// Find user by username
const findUserByUsername = (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
};

// Add other user-related database operations here

module.exports = { findUserByUsername };
