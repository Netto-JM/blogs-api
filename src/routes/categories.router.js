const express = require('express');
const { categoriesController } = require('../controllers');
const { authToken } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authToken, categoriesController.createCategory)
  .get('/', authToken, categoriesController.listCategories);

module.exports = router;