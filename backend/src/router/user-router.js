const express = require("express");
const {
  getUsers,
  createUser,
  login,
} = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.get("/", getUsers).post("/create", createUser).post("/login", login);

module.exports = userRouter;
