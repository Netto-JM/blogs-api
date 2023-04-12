const express = require('express');
const { loginController } = require('../controllers');
const validateNewLoginFields = require('../middlewares/validateNewLoginFields');

const router = express.Router();

router.post('/', validateNewLoginFields, loginController.signin);

module.exports = router;