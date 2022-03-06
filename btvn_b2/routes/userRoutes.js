const express = require("express");
const usersController = require("../controllers/usersController");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

userRouter
  .route("/:id")
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);
module.exports = userRouter;
