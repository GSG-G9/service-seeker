const router = require('express').Router();

const { isAuthController } = require('../controller/user');

router.get('/is-auth', isAuthController);

module.exports = router;
