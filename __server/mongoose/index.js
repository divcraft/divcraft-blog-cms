/* eslint-disable no-console */
const mongoose = require('mongoose');

const database = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log('Database is connected');
  });
};

module.exports = database;
