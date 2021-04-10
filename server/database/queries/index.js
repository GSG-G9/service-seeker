const {
  createNewUser,
  checkUserByEmail,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
  getUserNotifications,
  getUserData,
  addUserNotification,
} = require('./user');
const {
  createNewProvider,
  getPendingOrderRequest,
  getAcceptedOrders,
  postOrder,
  updateStateOrderRequest,
  getProviderDataById,
} = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  postOrder,
  updateStateOrderRequest,
  getPendingOrderRequest,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getAcceptedOrders,
  getProviderDataById,
  getUserNotifications,
  getUserData,
  addUserNotification,
};
