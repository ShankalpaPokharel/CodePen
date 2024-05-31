const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

// exports.googleAuthCallback = passport.authenticate('google', { session: false, failureRedirect: '/' }),
//   (req, res) => {
//     const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.cookie('jwt', token)
//     res.redirect(`http://localhost:5173/protected`)
//   };
  exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', { session: false, failureRedirect: '/' }, (err, user) => {
      if (err || !user) {
        return res.redirect('/');
      }
  
      const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.cookie('jwt', token);
      res.redirect('http://localhost:5173/protected');
    })(req, res, next);
  };

exports.success = (req, res) => {
  res.send(req.query.token);
};













// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const passport = require('passport');

// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: 'User already exists' });

//     user = new User({ name, email, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: 'User does not exist' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, name: user.name, email: user.email } , process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Google Auth
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/google/callback',
//   passport.authenticate('google', { session: false, failureRedirect: '/' }),
//   (req, res) => {
//     const token = jwt.sign({ user:req.user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
//     res.cookie('jwt', token)
//     res.redirect(`http://localhost:5173/protected`)
//   }
// );

// router.get('/success', (req, res) => {
//   res.send(req.query.token);
// });

// module.exports = router;
