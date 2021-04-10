const connection = require('../../config/connection');

const addUserNotification = ({ userId, description }) => {
  const sql = {
    text:
      'INSERT INTO notification (user_id, description) VALUES ($1, $2)  RETURNING *;',
    values: [userId, description],
  };
  return connection.query(sql);
};

module.exports = addUserNotification;
