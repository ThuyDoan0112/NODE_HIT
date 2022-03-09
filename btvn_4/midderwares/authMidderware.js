const User = require("../models/userModel");
const userRouter = require("../routes/userRouter");

exports.authorization = async (req, res, next) => {
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
};
