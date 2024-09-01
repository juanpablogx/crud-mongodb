const mongoose = require('mongoose');
const { MONGO_DB_URL } = require('./config');

const connection = mongoose.connect(MONGO_DB_URL, {
  appName: 'crud-hotel',
  retryWrites: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

module.exports = connection;