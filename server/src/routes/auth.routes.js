const { Router } = require('express');
const { userValidationRules, validate } = require('../middlewares/userValidator');
const { signupUser, loginUser, logoutUser } = require('../controllers/auth.controller');

const router = Router();

// routes
router.post('/signup', userValidationRules(), validate, signupUser);
router.post('/login', userValidationRules(), validate, loginUser);
router.post('/logout', logoutUser);

module.exports = router;
