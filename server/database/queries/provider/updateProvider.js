const connection = require('../../config/connection');

const updateProfileProviders = async ({
  title,
  bio,
  price_hour: priceHour,
  cover_image: coverImage,
  service_type: serviceType,
  avatar,
  mobile,
  location,
  id,
}) => {
  try {
    await connection.query('BEGIN TRANSACTION');
    await connection.query({
      text:
        'UPDATE providers SET title=$1,bio=$2,price_hour=$3,cover_image=$4,service_type=$5 WHERE user_id=$6 ;',
      values: [title, bio, priceHour, coverImage, serviceType, id],
    });
    await connection.query({
      text: 'UPDATE users set location=$1 ,mobile=$2  WHERE id=$3 ;',
      values: [location, mobile, id],
    });

    await connection.query('COMMIT');
  } catch (e) {
    await connection.query('ROLLBACK');
    throw e;
  }
};
module.exports = updateProfileProviders;
