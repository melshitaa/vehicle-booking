const mysql = require('mysql2');

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vehicle-booking',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected...');
});

module.exports = db;
