const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const codeRouter = require("./routes/codeRouter");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./midderwares/errorMidderware");

const app = express();
const port = 3000;
mongoose
  .connect("mongodb://localhost:27017/hit-post")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/codes", codeRouter);

app.use(globalErrorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
