const axios = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router(); // Create a router instance

// Define the maximum number of ingredients a user can search for
const maxIngredients = 5;

// Define a route to search for recipes by ingredients
router.get('/search', async (req, res) => {
  try {
    // Get the ingredients from the query parameters
    const { ingredients } = req.query;

    // Construct the URL for the Spoonacular API with your API key and ingredients
    const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;
    const spoonacularEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonacularApiKey}&ingredients=${encodeURIComponent(
      ingredients
    )}&number=2`;

    // Make a GET request to the Spoonacular API directly in the URL
    const response = await axios.get(spoonacularEndpoint);
    const recipesData = response.data;

    // Extract the desired properties (title, image, and sourceUrl) from each recipe
    const recipes = recipesData.map((recipe) => ({
      title: recipe.title,
      image: recipe.image,
      sourceUrl: recipe.sourceUrl,
    }));

    // Send the recipes back as JSON response
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

module.exports = router;
