const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const data = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });
  const posts = data.map((post) => {
    const myPost = {
      ...post.dataValues,
      user: post.dataValues.user.dataValues,
      categories: post.dataValues.categories.map((category) => category.dataValues),
    };
    return myPost;
  });
  return posts;
};

const findById = async (id) => {
  const data = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });
  
  if (!data) throw new Error('Post does not exist');

  const post = {
    ...data.dataValues,
    user: data.dataValues.user.dataValues,
    categories: data.dataValues.categories.map((category) => category.dataValues),
  };

  return post;
};

module.exports = {
  findAll,
  findById,
};