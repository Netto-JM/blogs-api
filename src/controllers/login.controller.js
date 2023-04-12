const { loginService } = require('../services');

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.authenticate(email, password);
    return res.status(200).json({ token: login });
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
};

module.exports = {
  signin,
};