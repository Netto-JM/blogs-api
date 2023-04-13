const { displayNameSchema, emailSchema, passwordSchema } = require('./schemas');

const validateDisplayName = (displayname) => {
  const { error } = displayNameSchema.validate(displayname);
  if (error) return '"displayName" length must be at least 8 characters long';
};

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) return '"email" must be a valid email';
};

const validatePassword = (password) => {
  const { error } = passwordSchema.validate(password);
  if (error) return '"password" length must be at least 6 characters long';
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};