const { Router } = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
  getProjects, createProject, editProject, deleteProject,
} = require('../controllers/projects.controller');

const { projectValidationRules, validate } = require('../middlewares/projectValidator');

const router = Router();

router.get('/projects', authMiddleware, getProjects);
router.post('/projects', authMiddleware, projectValidationRules(), validate, createProject);
router.put('/projects/:id', authMiddleware, projectValidationRules(), validate, editProject);
router.delete('/projects/:id', authMiddleware, deleteProject);

module.exports = router;
