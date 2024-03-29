const sendOtp = require("../helpers/sendOtp");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const forgotPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.find({ email: email });

    if (existingUser.length > 0) {
      jwt.sign({ email: email }, "shhhhh", function (err, token) {
        sendOtp(email, "newpass", token, "Forgot User Password");
      });
      return res.status(200).json({
        status: "success",
        message: "Check your email",
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Email does not exist",
      });
    }
  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = forgotPasswordController;
