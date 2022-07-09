const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
const User = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    listFriend:{ type: Array, default: [] },
    historyChat: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    ExpiresTimeIn:{ type: String, require: true,default:"3d" },
    accessToken: { type: Array, require: true, default: [] },
    refreshToken: { type: Array, require: true, default: [] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
