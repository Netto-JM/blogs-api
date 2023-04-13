const { userService } = require('../services');

const HTTP_CREATED_STATUS = 201;
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

module.exports = {
  createUser,
};