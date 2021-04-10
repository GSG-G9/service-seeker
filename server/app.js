require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { join } = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const { verify } = require('jsonwebtoken');
const cookie = require('cookie');

const router = require('./router');
const ioHandler = require('./io');
const { serverError, clientError } = require('./controller');
const { promiseJWT } = require('./utils');

const app = express();

const server = http.createServer(app);
const io = socketIo(server);
app.io = io;

app.set('PORT', process.env.PORT || 8080);
app.disable('x-powered-by');

const middleware = [
  express.json(),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  express.static(join(__dirname, '..', 'client', 'build')),
  logger('dev'),
];
app.use(middleware);

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

io.use(async (socket, next) => {
  const { token } = cookie.parse(socket.request.headers.cookie);
  try {
    const user = await await promiseJWT(verify, token);
    // eslint-disable-next-line no-param-reassign
    socket.user = user;
    next();
  } catch (err) {
    next(new Error('Authentication error'));
  }
}).on('connection', ioHandler(io));

app.use(clientError);
app.use(serverError);

module.exports = { app, server };
