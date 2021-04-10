const { getUserNotifications } = require('../database/queries');

const joinRoom = (io, socket) => async ({ userId }) => {
  try {
    const { id } = socket.user;
    if (userId !== id) {
      throw new Error('Unauthorized');
    }
    socket.join(userId);

    // get all notifications and send it
    const { rows } = await getUserNotifications({ userId });
    io.to(userId).emit('notification', rows);
  } catch (err) {
    console.log(err);
  }
};

module.exports = joinRoom;
