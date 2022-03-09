const express = require("express");
const userController = require("../controllers/userCotroller");
const authMidderware = require("../midderwares/authMidderware");

const userRouter = express.Router();

userRouter
  .route("/")
  .get(authMidderware.authorization, userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route("/getUsersAge")
  .get(authMidderware.authorization, userController.getUsersAge);

userRouter
  .route("/getUsersName")
  .get(authMidderware.authorization, userController.getUsersName);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(authMidderware.authorization, userController.deleteUser);

module.exports = userRouter;
