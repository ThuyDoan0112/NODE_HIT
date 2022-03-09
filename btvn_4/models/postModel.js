const mongoose = require("mongoose");
// const Schema = { mongoose };

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Post must have a title"],
  },
  content: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
