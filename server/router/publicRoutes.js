const router = require('express').Router();
const {
  signupController,
  loginController,
  logoutController,
} = require('../controller');
const {
  signupValidation,
  loginValidation,
} = require('../middleware/validation');

router.post('/login', loginValidation, loginController);
router.get('/logout', logoutController);
router.post('/signup', signupValidation, signupController);

module.exports = router;
