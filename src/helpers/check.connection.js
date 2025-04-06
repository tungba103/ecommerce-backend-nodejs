'use strict';

const mongoose = require('mongoose');

const os = require('os');
const process = require('process');
const _SECONDS = 5000;

const countConnection = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = countConnection();
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`Active connection: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage}`);

    if (numConnection > maxConnections) {
      console.log('Connection overload detected !');
    }
  }, _SECONDS); // Monitor every 5 seconds
};

module.exports = {
  countConnection,
  checkOverload,
};
