const sendEmail = require("../helpers/sendMail");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const resetMailController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    if (user.emailVerified) {
      return res.status(400).json({
        status: "error",
        message: "Email already verified",
      });
    }
    jwt.sign({ email: email }, "shhhhh", function (err, token) {
      sendEmail(email, "emailVerification", token, "This is your Verification");
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
