const globalMiddleware = (req, res, next) => {
  console.log("Global midddlwaare started");
  next();
  console.log("Global midddlwaare ended");
};

module.exports = {
  globalMiddleware,
};
