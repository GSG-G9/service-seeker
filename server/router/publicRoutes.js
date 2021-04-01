const router = require('express').Router();

const {
  signupValidation,
  loginValidation,
} = require('../middleware/validation');
const {
  signupController,
  loginController,
  logoutController,
  providersListController,
} = require('../controller');

router.post('/login', loginValidation, loginController);
router.get('/logout', logoutController);
router.post('/signup', signupValidation, signupController);

router.get('/providers', providersListController);

module.exports = router;
