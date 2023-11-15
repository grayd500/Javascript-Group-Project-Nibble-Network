// controllers/recipeRoutes.js:
const express = require('express');
const router = express.Router();

router.get('/recipe/:id', (req, res) => {
    res.render('single-recipe', { id: req.params.id });
});

module.exports = router;
