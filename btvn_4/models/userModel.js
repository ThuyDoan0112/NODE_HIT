const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Post = require("./postModel");

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "User must have a name"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.correctPassword = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
