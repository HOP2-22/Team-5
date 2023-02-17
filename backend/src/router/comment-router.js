const express = require("express");

const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/comment-controller");

const commentRouter = express.Router();

commentRouter
  .get("/", getComments)
  .post("/create", createComment)
  .delete("/:id", deleteComment)
  .patch("/update/:id", updateComment);

module.exports = commentRouter;
