const Comments = require("../model/comment");

exports.getComments = async (req, res) => {
  const comments = await Comments.find();
  res.status(200).json({
    message: "success",
    data: comments,
  });
};

exports.createComment = async (req, res) => {
  try {
    const comment = await Comments.create({
      username: req.body.username,
      message: req.body.message,
    });
    res.status(200).json({ message: "Created", data: comment });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteComment = async (request, response) => {
  const _id = request.params.id;
  try {
    await Comments.findByIdAndDelete({ _id });
    response.send({ message: "Deleted" });
  } catch (e) {
    response.status(400).send(error.message);
  }
};

exports.updateComment = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedPost = req.body;
    try {
      await Comments.findByIdAndUpdate({ _id }, updatedPost);
      res.send({ message: "Updated" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
