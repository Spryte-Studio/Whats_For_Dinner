const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

const { client_secret } = process.env;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
  done(null, user);
});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '212805700707-muf5v7daa20sumpsafnojrlanps22eh4.apps.googleusercontent.com',
    clientSecret: client_secret,
    callbackURL: "http://localhost:3000"
  },
  function(accessToken, refreshToken, profile, done) {
    // Use the profile info (maily profile id) to check if the use is registered in your db
      //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //    return done(err, user);
      //  });
      console.log(profile)
      return done(null, profile);
  }
));