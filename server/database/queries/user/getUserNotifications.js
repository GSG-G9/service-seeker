const connection = require('../../config/connection');

const getUserNotifications = ({ userId }) => {
  const sql = {
    text:
      'SELECT id, description, created_at FROM notification WHERE user_id = $1 ;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserNotifications;
