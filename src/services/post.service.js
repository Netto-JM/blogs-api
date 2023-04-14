const { BlogPost, User, Category } = require('../models');
const removePassword = require('../utils/removePasswordAttribute');

const findAll = async () => {
  const data = await BlogPost.findAll({
    include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }],
  });
  const posts = data.map((post) => {
    const myPost = {
      ...post.dataValues,
      user: removePassword(post.dataValues.user.dataValues),
      categories: post.dataValues.categories.map((category) => category.dataValues),
    };
    return myPost;
  });
  return posts;
};

module.exports = {
  findAll,
};