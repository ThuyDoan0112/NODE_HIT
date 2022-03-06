const express = require("express");
const User = require("../Models/usersModel");
//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//get a user
const getUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//created
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
//update
const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//delete
const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
