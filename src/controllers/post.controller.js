const { postService } = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const listPosts = async (_req, res) => {
  const posts = await postService.findAll();
  res.status(HTTP_OK_STATUS).json(posts);
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await postService.findById(id);
    res.status(HTTP_OK_STATUS).json(user);
  } catch ({ message }) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message });
  }
};

module.exports = {
  listPosts,
  getPost,
};