const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signCiphertext = (doc) => {
  return jwt.sign({ doc }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.encryption = catchAsync(async (req, res, next) => {
  const { doc } = req.body;

  const ciphertext = signCiphertext(doc);

  res.status(200).json({
    status: "success",
    data: ciphertext,
  });
});
exports.decryption = catchAsync(async (req, res, next) => {
  let ciphertext = req.headers.authorization.split(" ")[1];
  const decoded = await promisify(jwt.verify)(
    ciphertext,
    process.env.JWT_SECRET
  );

  res.status(200).json({
    status: "success",
    data: decoded,
  });
});
