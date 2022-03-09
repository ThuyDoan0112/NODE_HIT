const express = require("express");
const postController = require("../controllers/postController");

const postRouter = express.Router();

postRouter
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

module.exports = postRouter;
