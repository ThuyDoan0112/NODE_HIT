const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const Post = require("./postModel");

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "User must have a name"],
  },
  email: {
    type: String,
    require: [true, "Please provide a email"],
    validate: [validator.isEmail, "'Please provide a valid email'"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    minlenght: 8,
  },
  age: Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
