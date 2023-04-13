const {
  validateEmail,
  validateDisplayName,
  validatePassword,
} = require('../services/validations/validationsInputValues');

const HTTP_BAD_REQUEST_STATUS = 400;

module.exports = (req, res, next) => {
  const { email, password, displayName } = req.body;
  const nameErrorMessage = validateDisplayName(displayName);
  if (nameErrorMessage) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: nameErrorMessage });
  }

  const emailErrorMessage = validateEmail(email);
  if (emailErrorMessage) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: emailErrorMessage });
  }

  const passwordErrorMessage = validatePassword(password);
  if (passwordErrorMessage) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: passwordErrorMessage });
  }

  return next();
};