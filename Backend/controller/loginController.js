const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const token = jwt.sign({ email: user.email, id: user._id }, "shhhhh", {
      expiresIn: "24h",
    });

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        token: token,
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        verify: user.emailVerified,
      },
    });
  });
};

module.exports = loginController;
