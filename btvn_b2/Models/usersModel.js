const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
