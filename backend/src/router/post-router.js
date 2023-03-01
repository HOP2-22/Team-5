const express = require("express");
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controller/post-controller");

const postRouter = express.Router();
postRouter
  .get("/", getPosts)
  .post("/create", createPost)
  .get("/:title", getPost)
  .delete("/:id", deletePost)
  .patch("/update/:id", updatePost);

module.exports = postRouter;
