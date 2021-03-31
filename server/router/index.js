const router = require('express').Router();

const { protectMiddleware } = require('../middleware/auth');
const publicRoutes = require('./publicRoutes');
const user = require('./user');

// public endpoints
router.use(publicRoutes);
// protect endpoints
router.use(protectMiddleware);
router.use(user);

module.exports = router;
