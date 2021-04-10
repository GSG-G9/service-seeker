const checkUserByEmail = require('./checkUserByEmail');
const createNewUser = require('./createNewUser');
const getUserData = require('./getUserData');
const deleteOrderReq = require('./deleteOrderReq');
const addOrderRequest = require('./addOrderRequest');
const getUserOrdersQuery = require('./getUserOrders');
const getUserOrdersReqQuery = require('./getUserOrdersReq');
const getUserNotifications = require('./getUserNotifications');
const addUserNotification = require('./addUserNotification');

module.exports = {
  checkUserByEmail,
  createNewUser,
  getUserData,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getUserNotifications,
  addUserNotification,
};
