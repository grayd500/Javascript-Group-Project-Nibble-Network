// const express = require('express');
// const router = express.Router();

// router.get('/login', (req, res) => {
//     res.render('login');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }

    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email: email } });

        if (user && user.checkPassword(password)) {
            req.session.user = user; // Set a session variable
            res.redirect('/'); // RedirectS to the homepage
        } else {
            res.render('login', { error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'An error occurred' });
    }
});

module.exports = router;