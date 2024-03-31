const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const linkController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, "shhhhh");
    const findUser = await User.findOne({ email: decoded.email });

    if (!findUser.emailVerified) {
      await User.findOneAndUpdate(
        { email: decoded.email },
        { emailVerified: true }
      );
      return res.status(200).json({
        status: "success",
        message: "Verified email",
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "please verify your email",
      });
    }
  } catch (e) {
    return res.status(400).json({
      status: "error",
      message: e.message,
    });
  }
};
module.exports = linkController;
