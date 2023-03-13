const express = require("express");
const {
  getUsers,
  createUser,
  login,
  checkUser,
} = require("../controller/user-controller");

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .post("/create", createUser)
  .post("/login", login)
  .get("/checkUser", checkUser);

module.exports = userRouter;
