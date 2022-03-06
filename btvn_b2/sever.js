const express = require("express");
const mongoose = require("mongoose");

const courseRouter = require("./routes/courseRouter");
const userRouter = require("./routes/userRoutes");

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/hit-course")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
