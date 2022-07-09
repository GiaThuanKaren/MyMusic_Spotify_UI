const express = require("express");
const RegisterController = require("../../Controller/RegisterController");

const router = express.Router();

router.post("/", RegisterController.Register);

module.exports = router;
