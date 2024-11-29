const otpMatchController = async (req, res, next) => {
  try {
    const { otp, email } = req.body;
    console.log(otp, email);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = otpMatchController;
