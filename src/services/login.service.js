const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const removePassword = require('../utils/removePasswordAttribute');

const authenticate = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) throw new Error('Invalid fields');

  const dataValues = removePassword(user.dataValues);

  const token = generateToken(dataValues);

  return token;
};

module.exports = {
  authenticate,
};