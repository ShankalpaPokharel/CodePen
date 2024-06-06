const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const GitHubStrategy=require('passport-github').Strategy
const FacebookStrategy=require('passport-facebook').Strategy

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
        function getRandomNumber() {
            return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
          }
      user = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        photoUrl:profile.photos[0].value,
        username:profile.displayName.replace(/\s+/g, '_')+getRandomNumber()
      });
      await user.save();

      user.password=null
    }
   
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}));


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
async function (accessToken, refreshToken, profile, done) {
  try {
    let user = await User.findOne({ githubId: profile.id });
    if (!user) {
        function getRandomNumber() {
            return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
          }
      user = new User({
        githubId: profile.id,
        name: profile.displayName,
        // email: profile.emails[0].value,
        photoUrl:profile.photos[0].value,
        username:profile.displayName.replace(/\s+/g, '_')+getRandomNumber()
      });
      await user.save();

      user.password=null
    }
   
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }

}
));
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email']
},
async function (accessToken, refreshToken, profile, done) {
  try {
    let user = await User.findOne({ facebookId: profile.id });
    if (!user) {
      user = await User.findOne({ email: profile.emails[0].value });
      if (user) {
        // Update existing user details
        user.facebookId = profile.id;
      } else {
        // Create a new user if no user with this email exists
        user = new User({
          facebookId: profile.id,
          name: profile.displayName,
          email: profile.emails && profile.emails.length ? profile.emails[0].value : null,
          photoUrl: profile.photos && profile.photos.length ? profile.photos[0].value : null,
          username: profile.displayName.replace(/\s+/g, '_') + getRandomNumber()
        });
      }
      await user.save();
      user.password = null; // Clear password field if it exists
    }
   
    return done(null, user);
  } catch (err) {
    console.error("Error during user creation:", err);
    return done(err, false);
  }

}
));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
