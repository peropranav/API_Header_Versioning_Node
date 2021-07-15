export const middleware = {
  checkAuth: function (req, res, next) {
    console.log("authenticated!");
    console.log(req.body);
    console.log(req.headers["accept-version"]);
    next();
  },
};
