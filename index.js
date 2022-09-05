const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");

app.get("/", (req, res) => {
  res.status(200).send("Welcome, use /users to get all users");
});
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
