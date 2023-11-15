const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
// Spoonacular API key
const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;

// Define the endpoint URL for ingredient search
const spoonacularEndPoint =
  'https://api.spoonacular.com/recipes/findByIngredients';

// Define he maximum number of ingredients a user can search for
const maxIngredients = 5;

// Define a route to search for recipes by ingredients
router.get('/search', async (req, res) => {
  try {
    // Get the ingredients from the query parameters
    const { ingredients } = req.query;

    // Split the ingredients by coma and limit to maximum number
    const ingredientList = ingredients.split(',').slice(0, maxIngredients);

    // Construct the query parameters for the Spoonacular API
    const queryParams = {
      apiKey: spoonacularApiKey,
      ingredients: ingredientList.join(','),
    };

    // Make a GET request to Spoonacualar API
    const response = await axios.get(spoonacularEndPoint, {
      params: queryParams,
    });

    // Send the recipes back as JSON responce
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

module.exports = router;
