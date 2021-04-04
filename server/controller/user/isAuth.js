const { getUserData } = require('../../database/queries/user');

const isAuthController = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const {
      rows: [{ id, username, avatar, role }],
    } = await getUserData({
      userId,
    });

    return res.json({
      statusCode: 200,
      data: {
        id,
        username,
        avatar,
        role,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthController;
