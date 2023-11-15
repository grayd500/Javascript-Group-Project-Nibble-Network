// controllers/homeRoutes.js:
const express = require('express');
const router = express.Router();

// Sample data for testing
const recentRecipes = [
    { id: 1, title: "Frog Spleens in Tomato Sauce" },
    { id: 2, title: "Cream of Goat Hair" },
    { id: 3, title: "Toad Meat Souffle" },
    { id: 4, title: "Uncooked Wheat Chaff in Water" },
    { id: 5, title: "Cricket Heads in Squid Ink" }
];

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

module.exports = router;


