const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const app = express();

// Init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init db
require('./dbs/init.mongodb');
// const { checkOverload } = require('./helpers/check.connection');
// checkOverload();

// Init routes
app.get('', (req, res, next) => {
  const str = 'Hello World';
  return res.status(200).json({
    message: 'Welcome to Backend',
    metadata: str.repeat(1000),
  });
});

// Handling error

module.exports = app;
