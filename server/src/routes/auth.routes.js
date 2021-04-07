const { Router } = require('express');
const { userValidationRules } = require('../middlewares/userValidator');
const { validate } = require('../middlewares/validate');
const { signupUser, loginUser, logoutUser } = require('../controllers/auth.controller');

const router = Router();

// routes
router.post('/signup', userValidationRules(), validate, signupUser);
router.post('/login', userValidationRules(), validate, loginUser);
router.post('/logout', logoutUser);

module.exports = router;
