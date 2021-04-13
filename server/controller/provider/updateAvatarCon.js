const updateAvatar = require('../../utils/updateAvatar');
const { updateِِِAvailabilityQuery } = require('../../database/queries');

const updateArtistAvatar = async (req, res, next) => {
  try {
    if (req.files && req.files.profileImg) {
      const { profileImg } = req.files;
      const { id } = req.user;
      await updateArtistAvatarSchema.validate(
        { profileImg },
        { abortEarly: false }
      );

      const { public_id: imgID, format } = await uploadImg(profileImg.path);

      const { rowCount } = await updateAvatarQuery(`${imgID}.${format}`, id);
      res.json({
        statusCode: 200,
        data: { rowCount },
        message: 'Image added successfully',
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: 'You have to upload your image' });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, message: err.errors });
    } else if (err.message === 'upload image error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload image",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateArtistAvatar;
