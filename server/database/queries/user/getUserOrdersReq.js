const connection = require('../../config/connection');

const getUserOrdersReq = ({ userId }) => {
  const sql = {
    text:
      "SELECT orders_request.id, orders_request.description, orders_request.date, users.username, users.mobile, users.avatar, users.location, providers.title, providers.bio, providers.price_hour, providers.price_hour, providers.rating, providers.cover_image FROM orders_request INNER JOIN users ON orders_request.provider_id = users.id INNER JOIN providers ON  orders_request.provider_id = providers.user_id WHERE orders_request.user_id = $1 AND orders_request.state='pending';",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserOrdersReq;
