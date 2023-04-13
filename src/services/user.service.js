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

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw new Error('User does not exist');

  return user.dataValues;
};

module.exports = {
  createUser,
  findAll,
  findById,
};