const { addOrderRequest } = require('../../database/queries');

const userOrderRequest = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    await addOrderRequest({
      userId,
      ...req.body,
    });

    res.status(201).json({
      statusCode: 201,
      message: 'Order request sent successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userOrderRequest;
