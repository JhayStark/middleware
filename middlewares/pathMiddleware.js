const pathMiddleware = (req, res, next) => {
  console.log("Path midddlwaare started");
  next();
  console.log("Path midddlwaare ended");
};

module.exports = {
  pathMiddleware,
};
