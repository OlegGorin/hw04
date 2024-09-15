const User = require("../models/user");

const getUsers = (request, response) => {
  // Get users
};

const getUser = (request, response) => {
  // Get user
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
  return User.create({ ...request.body }).then((user) => {
    response
      .status(201)
      .send(user)
      .catch((error) => {
        response.status(500).send(error.message);
      });
  });
};

const updateUser = (request, response) => {
  // Update user
};

const deleteUser = (request, response) => {
  // Delete user
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
