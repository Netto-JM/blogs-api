const { postService } = require('../services');

const HTTP_OK_STATUS = 200;

const listPosts = async (_req, res) => {
  const posts = await postService.findAll();
  res.status(HTTP_OK_STATUS).json(posts);
};

module.exports = {
  listPosts,
};