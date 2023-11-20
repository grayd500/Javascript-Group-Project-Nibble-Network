// controllers/registrationRoutes.js:
const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { Sequelize } = require('sequelize');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Ensure all fields are provided
        if (!username || !email || !password) {
            throw new Error('All fields are required');
        }

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        // Create new user
        const newUser = await User.create({
            username,
            email,
            password,
        });

        // Redirect to the login page after successful registration
        res.redirect('/login');
    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;