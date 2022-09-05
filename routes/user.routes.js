const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/users.controller");

const userRouter = router();

userRouter.route("/").post(createUser).get(getUsers);

userRouter.route("/:userId").delete(deleteUser).get(getUser).patch(updateUser);

module.exports = userRouter;
