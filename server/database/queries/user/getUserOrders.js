const connection = require('../../config/connection');

const getUserOrders = ({ userId }) => {
  const sql = {
    text:
      "SELECT R.description, R.date, U.username, U.mobile, U.avatar, U.location, P.title, P.bio, P.price_hour, P.price_hour, P.rating, P.cover_image, O.id, O.state, O.arrive_time FROM orders_request AS R INNER JOIN users AS U ON R.provider_id = U.id INNER JOIN providers AS P ON R.provider_id = P.user_id INNER JOIN orders AS O ON R.id = O.orders_request_id WHERE R.user_id = $1 AND R.state='accepted';",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserOrders;
