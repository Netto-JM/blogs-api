const express = require('express');
const { userController } = require('../controllers');
const validateNewUserFields = require('../middlewares/validateNewUserFields');
const { authToken } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', validateNewUserFields, userController.createUser)
  .get('/:id', authToken, userController.getUser)
  .get('/', authToken, userController.listUsers);

module.exports = router;