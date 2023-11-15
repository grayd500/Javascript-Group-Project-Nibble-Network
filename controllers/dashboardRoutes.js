// controllers/dashboardRoutes.js:
const express = require('express');
const router = express.Router();

// Dashboard page route
router.get('/dashboard', (req, res) => {
    // Mock data for favoriteRecipes for testing purposes
    const favoriteRecipes = [
        { id: 1, title: "Spaghetti Carbonara" },
        { id: 2, title: "Chicken Alfredo" },
        { id: 3, title: "Caesar Salad" },
        // ... more mock recipes
    ];

    // Here, you would also include logic to check if the user is logged in
    res.render('dashboard', { favoriteRecipes });
});

module.exports = router;

