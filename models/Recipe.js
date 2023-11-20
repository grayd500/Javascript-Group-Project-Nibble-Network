// models/Recipe.js:
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Recipe = sequelize.define(
  'recipe',
  {
    // Define your Recipe model attributes here
    // For example:
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { modelName: 'recipe' }
);

module.exports = Recipe;
