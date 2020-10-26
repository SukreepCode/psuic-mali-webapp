const path = require('path');
const dotenv_safe = require('dotenv-safe');

// import .env variables
dotenv_safe.config({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET
};