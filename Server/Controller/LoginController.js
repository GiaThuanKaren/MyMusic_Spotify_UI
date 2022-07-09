const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const CryptoJS = require("crypto-js");

const { ACCESS_SEC, HASH_SEC } = require("../util/Key/keys");
const LoginController = {
  Login: async function (req, res) {
    const dataFormClient = req.body;
    console.log(dataFormClient);
    try {
      const checkIsHaveEmai = await User.findOne({
        email: dataFormClient.email,
      });
      console.log(checkIsHaveEmai);
      if (checkIsHaveEmai) {
        const accessToken = jwt.sign(dataFormClient, ACCESS_SEC, {
          expiresIn: "3d",
        });
        let bytes = CryptoJS.AES.decrypt(checkIsHaveEmai.password, HASH_SEC);
        let decryptedEmail = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (decryptedEmail == dataFormClient.password) {
          checkIsHaveEmai.accessToken.push(accessToken);
          const { password, refreshToken, ...others } = checkIsHaveEmai._doc;
          console.log("Coas");
          res.json({
            msg: "Success",
            statuse: 200,
            data: others,
          });
        } else {
          res.json({
            msg: "Incorrect password",
            data: "",
            status: 404,
          });
        }
      } else {
        res.json({
          msg: "This email is not registed by you \n Please check your email or Create a new account",
          data: "",
          status: 404,
        });
        // console.log("no email");
      }
    } catch (e) {
      console.log(e, "Login Controller");
      res.status(404).json({
        msg: "Error",
        data: "",
        status: 404,
      });
    }
  },
};

module.exports = LoginController;
