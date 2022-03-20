const express = require("express");
const userController = require("../controllers/userCotroller");
const authController = require("../controllers/authController");

const authMidderware = require("../midderwares/authMidderware");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(authMidderware.protect, userController.getAllUsers)
  .post(userController.createUser);

userRouter.route("/login").post(authController.login);

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
