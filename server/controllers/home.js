const path = require('path');
// const cors = require('cors');
const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const axios = require('axios');
const models = require('../models');
const { client_secret } = process.env;

require('../passport-setup');
require('dotenv').config()

const router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(cookieSession({
  name: 'Whats for dinner?',
  keys: ['key1', 'key2']
}));

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

router.use(passport.initialize());
router.use(passport.session());

// Route for if authentication is successful
router.get('/dashboard', isLoggedIn, (req, res) => res.send('http://localhost:3000/dashboard'));

// Route for logout of app
router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/dashboard');
  });

module.exports = router;