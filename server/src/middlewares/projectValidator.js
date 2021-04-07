const { check } = require('express-validator');

const projectValidationRules = () => [
  check('projectTitle')
    .notEmpty()
    .withMessage('No project name provided')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long'),
];

module.exports = { projectValidationRules };
