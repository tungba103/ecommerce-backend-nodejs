const app = require('./src/app');

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Ecommerce backend nodejs start port: ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Exit Ecommerce backend nodejs!'));
});
