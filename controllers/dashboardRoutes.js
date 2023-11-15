// controllers/dashboardRoutes.js:
const express = require('express');
const router = express.Router();

// Dashboard page route
router.get('/dashboard', (req, res) => {
    // Mock data for favoriteRecipes for testing purposes
    const favoriteRecipes = [
        { id: 421, title: "Cream of Goat Hair"  },
        { id: 754, title: "Uncooked Wheat Chaff in Lukewarm Water" },
        { id: 632, title: "Cricket Heads in Squid Ink"},
        // ... more mock recipes
    ];

    // Here, you would also include logic to check if the user is logged in
    res.render('dashboard', { favoriteRecipes });
});

module.exports = router;

