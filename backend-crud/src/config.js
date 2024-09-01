const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGO_DB_URL: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/crud',
  PORT: process.env.PORT || 3000,
};