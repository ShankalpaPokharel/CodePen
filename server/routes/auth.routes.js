const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/google', authController.googleAuth);
// router.get('/google/callback', authController.googleAuthCallback);
router.get('/success', authController.success);
router.post('/usernameExist', authController.usernameExist);
router.post('/emailExist', authController.emailExist);

router.get('/google/callback', (req, res, next) => {
    console.log('Google callback route hit');
    next();
  }, authController.googleAuthCallback);

module.exports = router;

router.get('/github',authController.githubAuth)
router.get('/github/callback',authController.githubAuthCallback)



// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.get('/google', authController.googleAuth);
// router.get('/google/callback', authController.googleAuthCallback);

// router.get('/facebook', authController.facebookAuth);
// router.get('/facebook/callback', authController.facebookAuthCallback);

// router.get('/github', authController.githubAuth);
// router.get('/github/callback', authController.githubAuthCallback);

// router.get('/logout', authController.logout);

// module.exports = router;
