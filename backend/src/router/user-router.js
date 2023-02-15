const express = require("express");
const { getUsers, createUser } = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", createUser);

module.exports = userRouter;
