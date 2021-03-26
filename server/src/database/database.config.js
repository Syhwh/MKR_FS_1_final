const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017', {
    dbName: "projects",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.warn('mongodb connected'))
  .catch((err) => console.warn(err.message))