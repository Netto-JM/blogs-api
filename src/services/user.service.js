const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const removePassword = require('../utils/removePasswordAttribute');

const createUser = async (newUser) => {
  const alreadyRegisteredUser = await User.findOne({ where: { email: newUser.email } });

  if (alreadyRegisteredUser) throw new Error('User already registered');

  const user = await User.create(newUser);

  const dataValues = removePassword({ ...user.dataValues, id: user.null });

  const token = generateToken(dataValues);

  return token;
};

module.exports = {
  createUser,
};