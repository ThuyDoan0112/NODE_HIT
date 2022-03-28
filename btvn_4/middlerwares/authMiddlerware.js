const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.authorization = catchAsync(async (req, res, next) => {
  const { id } = req.query;

  const user = await User.findById(id);

  if (!user) {
    res.status(404).json({
      message: "User does not exist",
    });
  }

  if (user.role !== "admin") {
    res.status(401).json({
      message: "User no right",
    });
  }
  next();
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  console.log(jwt.verify(token, process.env.JWT_SECRET));
  next();
});
