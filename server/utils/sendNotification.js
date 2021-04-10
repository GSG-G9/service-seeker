const { getUserData, addUserNotification } = require('../database/queries');

const sendNotification = async (io, userId, type) => {
  const {
    rows: [user],
  } = await getUserData({ userId });

  let description = '';
  switch (type) {
    case 'rejectOrder':
      description = `${user.username} reject order.`;
      break;
    case 'addOrderReq':
      description = `${user.username} Hired you.`;
      break;
    default:
      description = `${user.username} notified you.`;
      break;
  }

  const { rows: data } = await addUserNotification({ userId, description });
  io.to(userId).emit('notification', data);
};

module.exports = sendNotification;
