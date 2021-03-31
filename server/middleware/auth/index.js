const protectMiddleware = require('./checkToken');
const providerProtectMiddleware = require('./providerProtected');

module.exports = {
  protectMiddleware,
  providerProtectMiddleware,
};
