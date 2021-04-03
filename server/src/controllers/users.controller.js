const getUsers = (req, res) => { res.send('ok '); };
const getUser = (req, res) => res.send('hello ');
const editUser = (req, res) => res.send('hello ');
const deleteUser = (req, res) => res.send('hello ');

module.exports = {
  getUsers,
  getUser,
  editUser,
  deleteUser,
};
