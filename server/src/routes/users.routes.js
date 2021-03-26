const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
  getUsers, getUser, createUser, editUser, deleteUser, loginUser,
} = require('../controllers/users.controllers');
const { authMiddleware } = require('../helpers/authMiddleware');

// rutas
router.get('/users', authMiddleware, getUsers);
router.post('/login', loginUser);

router.post('/users', [check('email').normalizeEmail().isEmail()], createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
