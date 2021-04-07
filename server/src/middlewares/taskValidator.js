const { check } = require('express-validator');

const taskValidationRules = () => [
  check('task')
    .notEmpty()
    .withMessage('No task provided')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long'),
];

module.exports = { taskValidationRules };
