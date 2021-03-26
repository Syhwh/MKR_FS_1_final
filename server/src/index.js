/* eslint-disable no-console */
const express = require('express');

const app = express();

// database
require('./database/database.config');

const usersRouter = require('./routes/users.routes');

app.use(express.json());

// routes
app.use(usersRouter);

// TODO: crear vaariable de entorno
app.listen(3000, () => console.log('running in port 3000'));
