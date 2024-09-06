const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file

app.use(express.json());
app.use(cors());

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

// JWT middleware for protecting routes
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided." });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: "Failed to authenticate token." });
        }
        req.userId = decoded.id;
        next();
    });
};

// Let us run the server
const port = 3000; // Use your preferred port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create a connection to the database
const db = mysql.createConnection({
    user: 'root',       // Using the environment variable for DB user
    host: '127.0.0.1',               // or 'localhost'
    password: '', // Using the environment variable for DB password
    database: 'user_auths',    // Using the environment variable for DB name
    port: 3307
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database successfully.');
});

// Register route
app.post('/register', (req, res) => {
    const { Email, UserName, Password } = req.body;
    
    if (!Email || !UserName || !Password) {
        return res.status(400).send({ message: "All fields are required." });
    }

    bcrypt.hash(Password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send({ message: "Error hashing password", error: err });
        }
        const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
        db.query(sql, [Email, UserName, hash], (err, results) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).send({ message: "Username or email already exists." });
                }
                return res.status(500).send({ message: "Database error", error: err.sqlMessage || err });
            }
            res.send({ message: 'User added!' });
        });
    });
});

// Login route
app.post('/login', (req, res) => {
    const { LoginUserName, LoginPassword } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [LoginUserName], (err, results) => {
        if (err) {
            return res.status(500).send({ message: "Database error", error: err });
        }
        if (results.length > 0) {
            bcrypt.compare(LoginPassword, results[0].password, (error, isMatch) => {
                if (error) {
                    return res.status(500).send({ message: "Error checking password", error });
                }
                if (isMatch) {
                    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
                        expiresIn: 86400 // 24 hours
                    });
                    res.send({ 
                        message: "Login successful", 
                        token: token, 
                        user: { id: results[0].id, username: results[0].username, email: results[0].email } 
                    });
                } else {
                    res.send({ message: "Credentials don't match!" });
                }
            });
        } else {
            res.send({ message: "User not found!" });
        }
    });
});

// Dashboard route (protected)
app.get('/dashboard', verifyJWT, (req, res) => {
    const dashboardData = {
        stats: {
            users: 100,
            posts: 50,
            comments: 200,
        },
        recentActivity: [
            { user: "User1", action: "Posted a new discussion" },
            { user: "User2", action: "Commented on a discussion" },
        ]
    };
    res.json(dashboardData);
});

// Enhanced error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ error: 'Internal server error', details: err.message });
});
