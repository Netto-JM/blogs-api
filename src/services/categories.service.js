const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  const createdCategory = { ...newCategory.dataValues, id: newCategory.null };

  return createdCategory;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  findAll,
};