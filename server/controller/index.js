const { clientError, serverError } = require('./error');
const { providersListController } = require('./provider');
const {
  loginController,
  signupController,
  isAuthController,
  logoutController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
} = require('./user');

module.exports = {
  clientError,
  serverError,
  signupController,
  loginController,
  isAuthController,
  logoutController,
  providersListController,
  deleteOrderReqController,
  userOrderRequest,
  getUserOrdersController,
  getUserOrdersReqController,
};
