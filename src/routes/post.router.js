const express = require('express');
const { postController } = require('../controllers');
const { authToken } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authToken, postController.listPosts);

module.exports = router;