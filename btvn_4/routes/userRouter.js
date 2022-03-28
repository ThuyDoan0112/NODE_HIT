const express = require("express");
const ejs = require("ejs");
const userController = require("../controllers/userCotroller");
const authController = require("../controllers/authController");

const authMidderware = require("../midderwares/authMidderware");

const userRouter = express.Router();

userRouter.get("/login", (req, res) => {
  res.render("login.ejs");
});

userRouter.route("/login").post(authController.login);
userRouter.get("/forgotPassword", (req, res) => {
  res.render("forgotPassword.ejs");
});
userRouter.post("/forgotPassword", authController.forgotPassword);
userRouter.patch("/resetPassword/:token", authController.resetPassword);

userRouter
  .route("/")
  .get(authMidderware.protect, userController.getAllUsers)
  .post(userController.createUser);

userRouter.route("/getUsersAge").get(
  authMidderware.protect,
  // authMidderware.authorization,
  userController.getUsersAge
);

userRouter.route("/getUsersName").get(
  authMidderware.protect,
  // authMidderware.authorization,
  userController.getUsersName
);

userRouter
  .route("/:id")
  .get(authMidderware.protect, userController.getUser)
  .put(authMidderware.protect, userController.updateUser)
  .delete(
    authMidderware.protect,
    // authMidderware.authorization,
    userController.deleteUser
  );

module.exports = userRouter;
