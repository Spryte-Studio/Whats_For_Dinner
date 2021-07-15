const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const db = require('../database');
const { postUser } = require('./models/users');

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

app.use(cookieSession({
  name: 'Whats for dinner?',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect('/');
};

app.get('/recipes', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../client/dist' }, (err) => {
    if (err) {
      res.status(400).send(err);
    }
  });
});

app.get('/inventory', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../client/dist' }, (err) => {
    if (err) {
      res.status(400).send(err);
    }
  });
});

app.get('/dashboard', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../client/dist' }, (err) => {
    if (err) {
      res.status(400).send(err);
    }
  });
});


// Route for logout of app (Future Feature)
app.get('/logout', (req, res) => {
  req.session = null;
  // req.logout();
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

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    const email = req.user._json.email;
    // postUser(email);
    res.redirect('/inventory?email=' + email);
  });


app.use('/storage', controllers.inventory);
app.use('/ingredients', controllers.ingredients);
app.use('/users', controllers.users);
app.use('/spryte', controllers.recipes);
app.use('/favorites', controllers.favorites);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
