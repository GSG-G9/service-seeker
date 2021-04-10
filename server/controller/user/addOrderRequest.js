const { addOrderRequest } = require('../../database/queries');
const { boomify } = require('../../utils');
const { sendNotification } = require('../../utils');

const userOrderRequest = async (req, res, next) => {
  const { id: userId } = req.user;
  const { providerId } = req.body;
  try {
    await addOrderRequest({
      userId,
      ...req.body,
    });

    sendNotification(req.app.io, providerId, 'addOrderReq');

    res.status(201).json({
      statusCode: 201,
      message: 'Order request sent successfully',
    });
  } catch (error) {
    if (error.constraint === 'uc_orders_request') {
      next(boomify(409, 'order request already sent'));
    } else {
      next(error);
    }
  }
};

module.exports = userOrderRequest;
