const User = require("../model/userModel");

const otpController = async (req, res, next) => {
  const { email, otp } = req.body;
  const findUser = await User.findOne({ email });

  if (!findUser.emailVerified && findUser.otp === otp) {
    await User.findOneAndUpdate(
      { email: email },
      { otp: "", emailVerified: true }
    );
    return res.status(200).json({
      status: "success",
      message: "OTP Match",
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "OTP not match",
    });
  }
};

module.exports = otpController;
