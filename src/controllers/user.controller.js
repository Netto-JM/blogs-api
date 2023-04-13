const { userService } = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_CONFLICT_STATUS = 409;

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = { displayName, email, password };
    if (image) newUser.image = image;
    const token = await userService.createUser(newUser);
    return res.status(HTTP_CREATED_STATUS).json({ token });
  } catch ({ message }) {
    return res.status(HTTP_CONFLICT_STATUS).json({ message });
  }
};

const listUsers = async (_req, res) => {
  const users = await userService.findAll();
  res.status(HTTP_OK_STATUS).json(users);
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);
    res.status(HTTP_OK_STATUS).json(user);
  } catch ({ message }) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message });
  }
};

module.exports = {
  createUser,
  getUser,
  listUsers,
};