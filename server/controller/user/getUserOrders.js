const { getUserOrdersQuery } = require('../../database/queries');

const getUserOrders = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { rows: data } = await getUserOrdersQuery({ userId });
    res.json({
      statusCode: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserOrders;
