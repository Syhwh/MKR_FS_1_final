const { validationResult } = require('express-validator');
const { accessToken } = require('../helpers/jwtAuth');
const User = require('../Models/user.model');

const getUsers = (req, res) => {
  res.send('ok ');
};
const getUser = (req, res) => res.send('hello ');

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ errors: 'bad request not email or password provided' });
  }

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    res.status(400).json({ errors: 'bad request email already exist' });
  }

  const user = new User({ email, password });
  try {
    const savedUser = await user.save();
    const userToken = await accessToken(savedUser.id);
    res.send(userToken);
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // TODO validate email exist password exist
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ errors: 'unauthoraized' });
    }

    const userToken = await accessToken(user.id);
    res.send(userToken);
  } catch (error) {
    console.error(error);
  }
  // validate password ->
};

const editUser = (req, res) => res.send('hello ');
const deleteUser = (req, res) => res.send('hello ');

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
  loginUser,
};
