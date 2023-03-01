const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  username: { type: String },
  blogTitle: { type: String },
  date: { type: Date, default: Date.now() },
  text: { type: String },
  picture: { type: String },
});

const Posts = mongoose.model("posts", PostSchema);

module.exports = Posts;
