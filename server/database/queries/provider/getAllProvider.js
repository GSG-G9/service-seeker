const connection = require('../../config/connection');

const getAllProviders = () => {
  const sql = {
    text:
      'SELECT users.id,users.email,users.username,users.avatar,users.location,users.mobile,providers.bio, providers.price_houer,providers.availability,providers.rating FROM users INNER JOIN providers ON users.id = providers.user_id ;',
  };
  return connection.query(sql);
};

module.exports = getAllProviders;
