const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: '',
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
  profilePicture: {
    type: String,
    require: false,
    default: '',
  },
});

module.exports = model('User', UserSchema);
