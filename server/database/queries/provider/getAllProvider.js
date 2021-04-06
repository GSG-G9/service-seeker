const connection = require('../../config/connection');

const getAllProviders = () => {
  const sql = {
    text:
      'SELECT users.id,users.email,users.username,users.avatar,users.location,users.mobile,providers.bio, providers.price_hour,providers.availability,providers.rating,providers.cover_image,providers.title FROM users INNER JOIN providers ON users.id = providers.user_id WHERE providers.availability = true ;',
  };
  return connection.query(sql);
};

module.exports = getAllProviders;
