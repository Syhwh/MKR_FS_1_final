const { check } = require('express-validator');

const projectValidationRules = () => [
  check('projectTitle')
    .notEmpty()
    .withMessage('No project name provided')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long'),

];

const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

module.exports = { validate, projectValidationRules };
