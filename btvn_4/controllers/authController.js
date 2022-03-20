const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return next(new AppError("User does not exist", 400));
  }

  if (!(await user.correctPassword(password))) {
    return next(new AppError("Incorrect username or password"));
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    status: "success",
    token,
  });
});
