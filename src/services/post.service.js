const { BlogPost, User, Category } = require('../models');

const getPostData = (post) => {
  const postData = {
    ...post.dataValues,
    user: post.dataValues.user.dataValues,
    categories: post.dataValues.categories.map((category) => category.dataValues),
  };

  return postData;
};

const findAll = async () => {
  const data = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });
  
  const posts = data.map(getPostData);
  return posts;
};

const findById = async (id) => {
  const data = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });
  
  if (!data) throw new Error('Post does not exist');

  const post = getPostData(data);
  return post;
};

module.exports = {
  findAll,
  findById,
};