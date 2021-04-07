const connection = require('../../config/connection');

const deleteOrderReq = (orderReqId, userId) => {
  const sql = {
    text:
      "DELETE FROM orders_request WHERE id=$1 AND state='pending' AND ( provider_id =$2 OR user_id =$2) RETURNING *;",
    values: [orderReqId, userId],
  };

  return connection.query(sql);
};

module.exports = deleteOrderReq;
