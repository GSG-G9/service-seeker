const router = require('express').Router();

const {
  isAuthController,
  getUserOrdersReqController,
} = require('../controller');

router.get('/is-auth', isAuthController);

router.get('/user/order-requests', getUserOrdersReqController);

module.exports = router;
