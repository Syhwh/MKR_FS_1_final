const createError = require('http-errors');
const Task = require('../Models/task.model');

const getTasks = async (req, res, next) => {
  try {
    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');

    const { projectId } = req.body;

    if (!projectId) throw createError.NotFound('Project doesn\'t exists ');

    const tasks = await Task.find({ projectId });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { task, projectId } = req.body;
  try {
    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');

    if (!projectId) throw createError.NotFound('Project doesn\'t exists ');

    const newTask = new Task({ task, projectId });
    const taskSaved = await newTask.save();
    res.status(201).json(taskSaved);
  } catch (error) {
    next(error);
  }
};

const editTask = async (req, res, next) => {
  try {
    const { projectId, task, status } = req.body;
    const taskId = req.params.id;
    const userId = req.payload;

    if (!userId) throw createError.Unauthorized('unauthorized');

    if (!projectId) throw createError.NotFound('Project doesn\'t exists ');

    if (!taskId) throw createError.BadRequest('not task id provided');
    if (taskId.length < 24) throw createError.BadRequest('invalid task id format');

    const currentTask = await Task.findOne({ _id: taskId });
    if (!currentTask) throw createError.NotFound('Task doesn\'t exists ');

    const newTask = {
      task: task || currentTask.task,
      status: status || currentTask.status,
    };

    const taskEdited = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: newTask },
      { new: true },
    );

    res.status(201).json(taskEdited);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { projectId } = req.body;
    const taskId = req.params.id;

    const userId = req.payload;
    if (!userId) throw createError.Unauthorized('unauthorized');

    if (!projectId) throw createError.NotFound('Project doesn\'t exists ');

    if (!taskId) throw createError.BadRequest('not task id provided');

    if (taskId.length < 24) throw createError.BadRequest('invalid task id format');

    const task = await Task.findOne({ _id: taskId });
    if (!task) throw createError.NotFound('Task doesn\'t exists ');

    await Task.findByIdAndDelete(taskId);

    res.status(200).json({ message: 'task deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks, createTask, editTask, deleteTask,
};
