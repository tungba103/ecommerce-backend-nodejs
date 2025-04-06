'use strict';

const mongoose = require('mongoose');
const { countConnection } = require('../helpers/check.connection');

const connectString = `mongodb://localhost:27017/shopDEV`;

class Database {
  constructor() {
    this.connect();
  }

  //Function to connect database
  connect() {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => {
        console.log('Connect mongodb successfully!');
        countConnection();
      })
      .catch((err) => console.error(`Error when connect mongodb: ${err}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
