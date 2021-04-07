const { deleteOrderReq } = require('../../database/queries');
const { boomify } = require('../../utils');

const deleteOrderReqController = async (req, res, next) => {
  const { id: userId } = req.user;
  const { orderReqId } = req.params;

  try {
    const { rowCount } = await deleteOrderReq(orderReqId, userId);

    if (rowCount === 0) {
      throw boomify(409, 'no orders were found');
    }
    res.json({ statusCode: 200, message: 'order deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteOrderReqController;
