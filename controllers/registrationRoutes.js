// const express = require('express');
// const router = express.Router();

// router.get('/registration', (req, res) => {
//     res.render('registration');
// });

// module.exports = router;


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
        if (!User || !User.create) {
            throw new Error('User model or create method not found');
        }

        const newUser = await User.create({
            username,
            email,
            password,
        });

        // Redirect to the login page after successful registration
        res.redirect('/login');
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            console.error('Validation error during registration:', error.errors);
            res.status(400).json({ error: 'Validation failed. Please check your input.' });
        } else if (error instanceof Sequelize.UniqueConstraintError) {
            console.error('Unique constraint error during registration:', error.errors);
            res.status(409).json({ error: 'User with the provided email or username already exists.' });
        } else {
            console.error('Error during registration:', error.message);
            res.status(500).json({ error: 'Registration failed. Please try again.' });
        }
    }
});

module.exports = router;