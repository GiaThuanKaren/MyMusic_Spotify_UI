const express = require("express");
const Routes = require("./Routes");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
Routes(app);

app.listen(port, () => {
  console.log("Listennign on port " + port);
});
