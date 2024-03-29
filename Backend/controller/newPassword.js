const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const newPasswords = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    const decoded = jwt.verify(token, "shhhhh");

    bcrypt.hash(password, 12, async function (err, hash) {
      await User.findOneAndUpdate({ email: decoded.email }, { password: hash });
      return res.status(200).json({
        status: "success",
        message: "Password updated successfully",
      });
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
module.exports = newPasswords;
