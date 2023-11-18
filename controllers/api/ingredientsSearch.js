const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

router.get('/find-recipes', async (req, res) => {
  const ingredients = req.query.ingredients;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&ranking=2&number=2`
    );
    const formattedRecipes = response.data.map((recipe) => ({
      title: recipe.title,
      image: recipe.image,
      usedIngredientCount: recipe.usedIngredientCount,
      missedIngredientCount: recipe.missedIngredientCount,
    }));
    res.json(formattedRecipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;

module.exports = router;
