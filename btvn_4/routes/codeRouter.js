const express = require("express");
const codeController = require("../controllers/codeController");

const authMidderware = require("../middlewares/authMiddleware");

const codeRouter = express.Router();

codeRouter.post(
  "/encryption",
  authMidderware.protect,
  codeController.encryption
);
codeRouter.post(
  "/decryption",
  authMidderware.protect,
  codeController.decryption
);

module.exports = codeRouter;
