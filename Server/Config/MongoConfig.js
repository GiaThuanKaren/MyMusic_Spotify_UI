const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/MovieBooking");
    console.log("connect Suceed");
  } catch (e) {
    console.log("connect fail");
  }
}

module.exports = { connect };
