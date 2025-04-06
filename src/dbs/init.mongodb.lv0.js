'use strict';

const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/shopDEV`;
mongoose
  .connect(connectString)
  .then((_) => console.log('Connect mongodb successfully!'))
  .catch((err) => console.error(`Error when connect mongodb: ${err}`));

if (1 === 1) {
  mongoose.set('debug', true);
  mongoose.set('debug', { color: true });
}

module.exports = mongoose;
