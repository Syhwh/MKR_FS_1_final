const createError = require('http-errors');
const { accessToken } = require('../helpers/jwtAuth');

const User = require('../Models/user.model');

const signupUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    if (emailExist) throw createError.Conflict('This email address is already being used');

    const user = new User({ email, password });

    const savedUser = await user.save();
    const userToken = await accessToken(savedUser.id);
    res.status(201).json({ token: userToken });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) throw createError.NotFound('user not found');

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) throw createError.Unauthorized('invalid Username/password');

    const userToken = await accessToken(user.id);
    res.status(200).json({ token: userToken });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res) => {
  // TODO: set logout user
  res.send('user deleted');
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
};
