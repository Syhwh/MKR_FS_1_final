/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
require('dotenv').config();

const app = express();

// database
require('./database/database.config');

const usersRouter = require('./routes/users.routes');
const projectsRouter = require('./routes/projects.routes');
const tasksRouter = require('./routes/tasks.routes');
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// routes
app.use(usersRouter);
app.use(projectsRouter);
app.use(tasksRouter);
app.use(authRouter);

// Error handler
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
