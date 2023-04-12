const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token) => {
  // if (!token) new Error('Missing token.');
  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

const decodeToken = (token) => {
  // if (!token) new Error('Missing token.');
  const decoded = jwt.decode(token, secretKey);
  return decoded;
};

module.exports = {
  generateToken,
  validateToken,
  decodeToken,
};