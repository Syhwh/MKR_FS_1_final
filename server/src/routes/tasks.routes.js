const { Router } = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
  getTasks, createTask, editTask, deleteTask,
} = require('../controllers/tasks.controller');

const { taskValidationRules } = require('../middlewares/taskValidator');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/tasks', authMiddleware, getTasks);
router.post('/tasks', authMiddleware, taskValidationRules(), validate, createTask);
router.put('/tasks/:id', authMiddleware, taskValidationRules(), validate, editTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
