const { app, server } = require('./app');

const port = app.get('PORT');

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
