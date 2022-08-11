const express = require("express");
const LoginController = require("../../Controller/LoginController");
const router = express.Router();

router.post("/", LoginController.Login);

module.exports = router;
