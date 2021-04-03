const Project = require('../Models/project.model');

const getProjects = async (req, res) => {
  try {
    console.log('req.payload', req.payload);
    const projects = await Project.find({ createdBy: req.payload });

    res.send(projects);
  } catch (error) {
    console.error(error);
  }
};
const createProject = async (req, res) => {
  const { name } = req.body;

  const project = {
    name,
    createdBy: req.payload,
  };
  const newProject = new Project(project);
  const projectSaved = await newProject.save();
  res.send(projectSaved);
};

module.exports = {
  getProjects, createProject,
};
