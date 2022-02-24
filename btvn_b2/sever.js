const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`), "utf-8");
//get all users
app.get("/api/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: users,
  });
});
//get a user
app.get("/api/users/:id", (req, res) => {
  let { id } = req.params;
  let user = users.find((el) => id == el._id);

  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "User not found!",
    });

  res.status(200).json({
    status: "success",
    data: user,
  });
});
//created
app.post("/api/users", (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: "success",
        data: newUser,
      });
    }
  );
});
//update
app.put("/api/users:id", (req, res) => {
  let user = req.body;
  let { id } = req.params;
  let index = users.findIndex((user) => id == user._id);

  if ((index = -1))
    return res.status(404).json({
      status: "fail",
      message: "User not found!",
    });

  users[index] = { ...user };
  res.status(200).json({
    status: "success",
    data: {
      user: "<Updated user here...>",
    },
  });
});
//delete
app.delete("/api/users:id", (req, res) => {
  let { id } = req.params;

  let index = users.findIndex((user) => id === user._id);

  if ((index = -1)) {
    return res.status(404).json({
      status: "fail",
      message: "User not found!",
    });
  }

  users.splice(index, 1);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
