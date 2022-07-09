const User = require("../Model/User");
const CryptoJS = require("crypto-js");
const { HASH_SEC } = require("../util/Key/keys");
const RegisterController = {
  Register: async function (req, res) {
    const dataFormClient = req.body;
    // console.log(dataFormClient);
    try {
      dataFormClient.password = CryptoJS.AES.encrypt(
        JSON.stringify(dataFormClient.password),
        HASH_SEC
      ).toString();
      const user = new User(dataFormClient);
      let dataFromDB = await User.find();
      let CheckEmailIsCollaps = dataFromDB.find((item, idx) => {
        return item.email == dataFormClient.email;
      });
      //   return res.json(CheckEmailIsCollaps)
      //   console.log(CheckEmailIsCollaps)
      if (!CheckEmailIsCollaps) {
        let result = await user.save();
        // console.log(result);
        res.status(200).json({
          msg: "Success",
          data: dataFormClient,
          status: 200,
        });
      } else
        res.json({
          msg: "Emai is Collaped",
          data: "",
          status: 404,
        });
      //   res.send("Inser route Success");
    } catch (e) {
      res.send("Fail to insert");
      console.log(e), "Regis Controller ";
    }
  },
};

module.exports = RegisterController;
