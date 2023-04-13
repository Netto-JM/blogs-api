const { validateToken } = require('../utils/auth');

const HTTP_UNAUTHORIZED_STATUS = 401;

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    validateToken(authorization);
    next();
  } catch ({ message }) {
    if (message === 'jwt malformed') {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
    }
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message });
  }
};

module.exports = {
  authToken,
};