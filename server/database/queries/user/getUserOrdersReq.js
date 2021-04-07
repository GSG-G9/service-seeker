const connection = require('../../config/connection');

const getUserOrdersReq = ({ userId }) => {
  const sql = {
    text:
      "SELECT R.id, R.description, R.date, U.username, U.mobile, U.avatar, U.location, P.title, P.bio, P.price_hour, P.price_hour, P.rating, P.cover_image FROM orders_request AS R INNER JOIN users AS U ON R.provider_id = U.id INNER JOIN providers AS P ON  R.provider_id = P.id WHERE R.user_id = $1 AND R.state='pending';",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserOrdersReq;
