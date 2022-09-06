const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/users.controller");
const { pathMiddleware } = require("../middlewares/pathMiddleware");

const userRouter = router();

userRouter.route("/").post(createUser).get(pathMiddleware, getUsers);

userRouter.route("/:userId").delete(deleteUser).get(getUser).patch(updateUser);

module.exports = userRouter;
