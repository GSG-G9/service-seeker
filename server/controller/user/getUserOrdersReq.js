const { getUserOrdersReqQuery } = require('../../database/queries');

const getUserOrdersReq = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { rows: data } = await getUserOrdersReqQuery({ userId });
    res.json({
      statusCode: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserOrdersReq;
