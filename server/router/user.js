const router = require('express').Router();

const {
  isAuthController,
  getUserOrdersReqController,
  getUserOrdersController,
} = require('../controller');

router.get('/is-auth', isAuthController);
// user orders
router.get('/user/order-requests', getUserOrdersReqController);
router.get('/user/orders', getUserOrdersController);

module.exports = router;
