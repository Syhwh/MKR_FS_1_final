const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(400).json({ error: 'bad request' });
  }

  jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      res.status(400).json({ error: 'bad request' });
    }
    req.payload = payload;
    next();
  });
};

module.exports = { authMiddleware };
