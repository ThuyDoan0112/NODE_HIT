const express = require("express");
const codeController = require("../controllers/codeController");

const codeRouter = express.Router();

codeRouter.post("/encryption", codeController.encryption);
codeRouter.post("/decryption", codeController.decryption);

module.exports = codeRouter;
