const connection = require('../../config/connection');

const createNewUser = ({
  username,
  email,
  password,
  mobile,
  location,
  role,
}) => {
  const sql = {
    text:
      'INSERT INTO users (username, email, password, mobile, location, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, role;',
    values: [username, email, password, mobile, location, role],
  };
  return connection.query(sql);
};

module.exports = createNewUser;
