const { check } = require('express-validator');

const userValidationRules = () => [
  check('email')
    .notEmpty()
    .withMessage('bad request not email or password provided')
    .isEmail()
    .withMessage('wrong email address'),
  check('password')
    .notEmpty()
    .withMessage('bad request not email or password provided')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long'),
];

module.exports = { userValidationRules };
