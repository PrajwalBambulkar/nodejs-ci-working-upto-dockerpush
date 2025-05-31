const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql-container',
    user: 'root',
    password: 'yourpassword',
    database: 'testdb',
    port: 3306
});

connection.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);  // optional: stop app if DB connection fails
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection;

