const RegisRoute = require("./RegisRoute");
const LoginRoute = require("./LoginRoutes");

const Routes = function (app) {
  // [ GET , POST ] register , Verify
  app.use("/register", RegisRoute);
  // [ GET ] login , Verify
  app.use("/login", LoginRoute);
  //[ GET , POST , PUT , DELETE]
  app.use("/", (req, res) => {
    res.send("hi");
  });
};
module.exports = Routes;
