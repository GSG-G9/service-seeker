const {
  getUserData,
  addUserNotification,
  getUserNotifications,
} = require('../database/queries');

const sendNotification = async (io, from, to, type) => {
  const {
    rows: [user],
  } = await getUserData({ userId: from });

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

  await addUserNotification({ userId: to, description });

  const { rows: data } = await getUserNotifications({ userId: to });
  io.to(to).emit('notification', data);
};

module.exports = sendNotification;
