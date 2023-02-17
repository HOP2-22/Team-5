const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRouter = require("./router/user-router");
const postRouter = require("./router/post-router");
const commentRouter = require("./router/comment-router");
require("dotenv").config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
mongoose.set("strictQuery", true);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
