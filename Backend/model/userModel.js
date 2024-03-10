const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Merchant", "User"],
    default: "User",
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  otp: String,
});

module.exports = model("User", userSchema);
