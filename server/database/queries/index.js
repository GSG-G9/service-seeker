const {
  createNewUser,
  checkUserByEmail,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  deleteOrderReq,
} = require('./user');

const { createNewProvider, getAcceptedOrders } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
  deleteOrderReq,
  addOrderRequest,
  getUserOrdersQuery,
  getUserOrdersReqQuery,
  getAcceptedOrders,
};
