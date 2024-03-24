const bcrypt = require("bcrypt");
const User = require("../model/userModel");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Incorrect your email or password",
    });
  }

  if (!user.emailVerified) {
    return res.status(403).json({
      status: "Not authorized",
      message: "please verify your email",
    });
  }

  await bcrypt.compare(password, user.password).then(function (result) {
    if (!result) {
      return res.status(400).json({
        status: "error",
        message: "Incorrect your email or password",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Login successful",
    });
  });
};

module.exports = loginController;
