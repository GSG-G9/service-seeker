const JWT = require('jsonwebtoken');
const { promiseJWT, boomify } = require('../../utils');

const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { id, role } = await promiseJWT(JWT.verify, token);
    req.user = {
      id,
      role,
    };
    next();
  } catch (error) {
    next(boomify(401, 'Unauthenticated'));
  }
};

module.exports = protectRoute;
