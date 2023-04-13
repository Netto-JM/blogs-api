const express = require('express');
const { userController } = require('../controllers');
const validateNewUserFields = require('../middlewares/validateNewUserFields');

const router = express.Router();

router.post('/', validateNewUserFields, userController.createUser);

module.exports = router;