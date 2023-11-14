// controllers/homeRoutes.js:
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('homepage');
});

// Login page route
router.get('/login', (req, res) => {
    res.render('login');
});

// Registration page route
router.get('/registration', (req, res) => {
    res.render('registration');
});

// Dashboard page route
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;

