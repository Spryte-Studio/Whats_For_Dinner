const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./passport-setup');
require('dotenv').config();

const { client_secret } = process.env;

const controllers = require('./controllers');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/recipes', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../client/dist' }, (err) => {
    if (err) {
      res.status(400).send(err);
    }
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'Whats for dinner?',
  keys: ['key1', 'key2']
}));

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.statusCode(401);
};

// Route for logout of app (Future Feature)
app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// app.use('/inventory', controllers.inventory);
app.use('/ingredients', controllers.ingredients);
app.use('/users', controllers.users);
app.use('/spryte', controllers.recipes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
