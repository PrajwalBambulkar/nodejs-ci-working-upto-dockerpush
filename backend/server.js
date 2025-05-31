const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/submit', (req, res) => {
    const { first_name, last_name } = req.body;
    const sql = 'INSERT INTO users (first_name, last_name) VALUES (?, ?)';
    
    db.query(sql, [first_name, last_name], (err, result) => {
        if (err) {
            console.error('Error inserting data: ', err);
            return res.status(500).send('Database error');
        }
        res.send('Data inserted successfully');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

