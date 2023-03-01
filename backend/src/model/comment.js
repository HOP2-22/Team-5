const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: { type: String },
  message: { type: String },
  publishDate: { type: Date, default: Date.now() },
});

const Comments = mongoose.model("comments", CommentSchema);

module.exports = Comments;
