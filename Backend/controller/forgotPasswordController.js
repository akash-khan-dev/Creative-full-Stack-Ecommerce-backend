const sendOtp = require("../helpers/sendOtp");
const User = require("../model/userModel");
const forgotPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.find({ email: email });

    if (existingUser.length > 0) {
      jwt.sign({ email: email }, "shhhhh", function (err, token) {
        sendOtp(email, token);
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
