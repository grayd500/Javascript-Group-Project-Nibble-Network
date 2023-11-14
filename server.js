// server.js:
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session with Sequelize store
app.use(session({
  secret: 'Super secret secret', // Replace with your secret
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000, // Cleanup expired sessions
    expiration: 24 * 60 * 60 * 1000  // Set session expiration
  }),
  resave: false,
  saveUninitialized: false, // Adjust these settings as needed
}));

// Define routes after session middleware
const homeRoutes = require('./controllers/homeRoutes');
const loginRoutes = require('./controllers/loginRoutes');
const registrationRoutes = require('./controllers/registrationRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes'); // If you created this file
const resultsRoutes = require('./controllers/resultsRoutes');
const recipeRoutes = require('./controllers/recipeRoutes');

app.use('/', homeRoutes);
app.use('/', loginRoutes);
app.use('/', registrationRoutes);
app.use('/', dashboardRoutes);
app.use('/', resultsRoutes);
app.use('/', recipeRoutes);
// app.use(require('./controllers'));

// Sync sequelize models to the database, then start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
