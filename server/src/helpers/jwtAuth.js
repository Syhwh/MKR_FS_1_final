const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

const accessToken = (userId) => new Promise((resolve, reject) => {
  jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET, {}, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

module.exports = { accessToken };
