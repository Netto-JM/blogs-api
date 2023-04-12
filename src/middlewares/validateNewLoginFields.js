const HTTP_BAD_REQUEST_STATUS = 400;

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'Some required fields are missing',
    });
  }

  return next();
};