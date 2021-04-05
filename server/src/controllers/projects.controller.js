const createError = require('http-errors');
const Project = require('../Models/project.model');

const getProjects = async (req, res, next) => {
  try {
    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');
    const projects = await Project.find({ createdBy: userId });

    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  const { projectTitle, projectDescription = '' } = req.body;
  try {
    const userId = req.payload;

    if (!userId) throw createError.Unauthorized('unauthorized');

    const project = {
      projectTitle,
      projectDescription,
      createdBy: userId,
    };

    const newProject = new Project(project);
    const projectSaved = await newProject.save();
    res.status(201).json(projectSaved);
  } catch (error) {
    next(error);
  }
};

const editProject = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    if (!projectId) throw createError.BadRequest('not project id provided');

    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');

    const project = await Project.findOne({ _id: projectId });
    if (!project) throw createError.NotFound('Project doesn\'t exists ');

    const { projectTitle, projectDescription = '' } = req.body;

    const newProject = { projectTitle, projectDescription };

    const projectEdited = await Project.findOneAndUpdate(
      { _id: projectId },
      { $set: newProject },
      { new: true },
    );

    res.status(201).json(projectEdited);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    if (!projectId) throw createError.BadRequest('not project id provided');

    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');

    const project = await Project.findOne({ _id: projectId });
    if (!project) throw createError.NotFound('Project doesn\'t exists ');

    await Project.findByIdAndDelete(projectId);

    res.status(200).json({ message: 'project deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects, createProject, editProject, deleteProject,
};
