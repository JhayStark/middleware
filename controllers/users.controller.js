const getUser = (req, res) => {
  res.status(200).send("Get Single User");
};

const getUsers = (req, res) => {
  res.status(200).send("All Users");
};

const createUser = (req, res) => {
  res.status(200).send("User created");
};

const deleteUser = (req, res) => {
  res.status(200).send("User deleted");
};

const updateUser = (req, res) => {
  res.status(200).send("User updated");
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
