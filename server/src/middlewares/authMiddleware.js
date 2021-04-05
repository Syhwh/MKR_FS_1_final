const jwt = require('jsonwebtoken');
const env = require('dotenv');
const createError = require('http-errors');

env.config();

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) throw createError.Unauthorized('no auth token provided');

    jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) throw createError.Unauthorized('unauthorized token');
      req.payload = payload;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { authMiddleware };
