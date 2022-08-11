const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://sportifyclone:3120410513Thuan@cluster0.a6cyoli.mongodb.net/sportifyclone?retryWrites=true&w=majority");
    console.log("connect Suceed");
  } catch (e) {
    console.log("connect fail");
  }
}

module.exports = { connect };
