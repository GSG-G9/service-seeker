const joinRoom = require('./joinRoom');

const ioHandler = (io) => (socket) => {
  socket.on('joinRoom', joinRoom(io, socket));

  socket.on('disconnect', () => {
    io.emit('msg', 'some one disconnected');
  });
};

module.exports = ioHandler;
