// server.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // db.js uses createPool
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { first_name, last_name } = req.body;
    const query = 'INSERT INTO users (first_name, last_name) VALUES (?, ?)';
    db.query(query, [first_name, last_name], (err, results) => {
        if (err) {
            console.error('Insert error:', err);
            return res.status(500).send('Database error');
        }
        res.send('Data submitted successfully!');
    });
});

app.listen(3000, () => {
    console.log('Backend server running on port 3000');
});

