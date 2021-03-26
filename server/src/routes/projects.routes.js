const { Router } = require('express');

const router = Router();

const { getProjects, createProject } = require('../controllers/projects.controller');
const { authMiddleware } = require('../helpers/authMiddleware');

router.get('/projects', authMiddleware, getProjects);
router.post('/projects', authMiddleware, createProject);

module.exports = router;
