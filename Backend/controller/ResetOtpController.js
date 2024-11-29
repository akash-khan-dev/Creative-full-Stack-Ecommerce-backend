const { customOtpGen } = require("otp-gen-agent");
const userModel = require("../model/userModel");
const sendEmailFrontend = require("../helpers/sendMailForFrontend");

const ResetOtpController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existing = await userModel.findOne({ email: email });
    if (!existing) {
      return res.status(400).json({ message: "user Not Found" });
    }
    const OTP = await customOtpGen({ length: 5 });
    existing.otp = OTP;
    await existing.save();
    // send Email
    sendEmailFrontend(email, OTP, "emailVerification");
    // otp is deleted
    setTimeout(async () => {
      await userModel.findOneAndUpdate(
        { email },
        { $unset: { otp: "" } },
        { new: true }
      );
    }, 240000);
    return res
      .status(200)
      .json({ message: "your otp has been reset check your email" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = ResetOtpController;
