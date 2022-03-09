const express = require("express");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find().populate("posts");

  res.status(200).json({
    status: "success",
    data: users,
  });
});
//get a user
const getUser = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  const user = await User.findById(id).populate("posts");
  console.log(user.age);
  res.status(200).json({
    status: "success",
    data: user,
  });
});
//created
const createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: newUser,
  });
});
//update
const updateUser = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
//delete
const deleteUser = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
const getUsersAge = catchAsync(async (req, res, next) => {
  const users = await User.find({ age: { $gt: 25, $lte: 50 } }).populate(
    "posts"
  );

  res.status(200).json({
    status: "success",
    data: users,
  });
});

const getUsersName = catchAsync(async (req, res, next) => {
  const users = await User.find({ name: /^h/ }).populate("posts");
  res.status(200).json({
    status: "success",
    data: users,
  });
});
module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsersAge,
  getUsersName,
};
