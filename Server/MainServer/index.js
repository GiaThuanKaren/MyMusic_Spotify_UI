const express = require("express");
const Routes = require("./Routes");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
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
 