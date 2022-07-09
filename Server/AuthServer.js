const express = require("express");
const { connect } = require("./src/Config/MongoConfig");

const app = express();
const PORT = 5001;
app.use(express.json());

const bodyParser = require("body-parser");
const Routes = require("./src/Routes/AuthRoutes");
app.use(bodyParser.urlencoded({ extended: true }));
connect();
Routes(app);
app.listen(PORT,()=>{
    console.log("Running Auth Server at "+ PORT)
})