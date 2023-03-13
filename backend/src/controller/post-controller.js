const Posts = require("../model/post");

exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.status(200).json({
    message: "success",
    data: posts,
  });
};

exports.createPost = async (req, res) => {
  try {
    const post = await Posts.create({
   blogTitle: req.body.blogTitle,
      text: req.body.text,
      picture: req.body.picture,
    });
    res.status(200).json({ message: "Created", data: post });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getPost = async (req, res) => {
  try {
    const title = req.params.title;
    const postData = await Posts.find({ blogTitle: title });
    res.send(postData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deletePost = async (request, response) => {
  const _id = request.params.id;
  try {
    await Posts.findByIdAndDelete({ _id });
    response.send({ message: "Deleted" });
  } catch (e) {
    response.status(400).send(error.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = req.body;
    try {
      await Posts.findByIdAndUpdate({ id }, updatedPost);
      res.send({ message: "Updated" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
