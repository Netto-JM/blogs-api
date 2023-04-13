const { categoriesService } = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_REQUEST_STATUS = 400;

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: '"name" is required' });
    const newCategory = await categoriesService.createCategory(name);
    return res.status(HTTP_CREATED_STATUS).json({ ...newCategory });
  } catch ({ message }) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message });
  }
};

const listCategories = async (_req, res) => {
  const categories = await categoriesService.findAll();
  res.status(HTTP_OK_STATUS).json(categories);
};

module.exports = {
  createCategory,
  listCategories,
};