const Users = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = async (request, response) => {
  const users = await Users.find();
  response.status(200).json({
    message: "success",
    data: users,
  });
};

exports.createUser = async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(request.body.password, salt);
  try {
    const user = await Users.create({
      username: request.body.username,
      email: request.body.email,
      password: hashed,
    });
    response.status(200).json({
      message: "created successfully",
      data: user,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};
