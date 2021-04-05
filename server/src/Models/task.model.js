const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },

});

module.exports = model('Task', TaskSchema);
