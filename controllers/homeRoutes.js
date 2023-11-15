// controllers/homeRoutes.js:
const express = require('express');
const router = express.Router();

// Sample data for testing
const recentRecipes = [
    { id: 273, title: "Frog Spleens in Tomato Sauce" },
    { id: 421, title: "Cream of Goat Hair" },
    { id: 32, title: "Toad Meat Souffle" },
    { id: 754, title: "Uncooked Wheat Chaff in Lukewarm Water" },
    { id: 632, title: "Cricket Heads in Squid Ink" }
];

// Home page route
router.get('/', (req, res) => {
    res.render('homepage', { recentRecipes }); // Pass the recentRecipes data to the view
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


