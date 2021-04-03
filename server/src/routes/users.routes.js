const { Router } = require('express');

const router = Router();

const {
  getUsers, getUser, editUser, deleteUser,
} = require('../controllers/users.controller');
const { authMiddleware } = require('../middlewares/authMiddleware');

// routes
router.get('/users', authMiddleware, getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
