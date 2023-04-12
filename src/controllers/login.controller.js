const { loginService } = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST_STATUS = 400;

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.authenticate(email, password);
    return res.status(HTTP_OK_STATUS).json({ token: login });
  } catch ({ message }) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message });
  }
};

module.exports = {
  signin,
};