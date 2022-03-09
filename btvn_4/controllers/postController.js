const express = require("express");
const Post = require("../models/postModel");
const catchAsync = require("../utils/catchAsync");

const getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();

  res.status(200).json({
    status: "success",
    data: posts,
  });
});

const createPost = catchAsync(async (req, res, next) => {
  const post = await Post.create(req.body);

  res.status(201).json({
    status: "success",
    data: post,
  });
});

module.exports = {
  getAllPosts,
  createPost,
};
