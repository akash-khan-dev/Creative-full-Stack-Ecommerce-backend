const sendOtp = require("../helpers/sendOtp");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const resetMailController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.find({ email: email });
    if (user.length == 0) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    jwt.sign({ email: email }, "shhhhh", function (err, token) {
      sendOtp(email, "emailVerification", token, "This is your Verification");
    });
    return res.status(200).json({
      status: "success",
      message: "Check your email",
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e.message,
    });
  }
};
module.exports = resetMailController;
