const userModel = require("../model/userModel");

const otpMatchController = async (req, res, next) => {
  try {
    const { otp, email } = req.body;
    const existing = await userModel.findOne({ email: email });
    if (!existing) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!otp) {
      return res.status(404).json({ message: "Please inter your OTP" });
    }
    if (!existing.otp) {
      return res.status(404).json({ message: "Time is lose please Reset OTP" });
    }
    if (existing.otp !== otp) {
      return res.status(404).json({ message: "OTP not Match" });
    }
    const verified = await userModel.findOneAndUpdate(
      { email: email },
      { emailVerified: true },
      { new: true }
    );

    return res.status(200).json({
      message: "OK",
      data: {
        name: existing.name,
        id: existing._id,
        email: existing.email,
        emailVerified: verified.emailVerified,
      },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = otpMatchController;
