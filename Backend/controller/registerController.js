const User = require("../model/userModel");
const sendEmail = require("../helpers/sendMail");
const { customOtpGen } = require("otp-gen-agent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({ error: "please fill the all field" });
    }

    if (password && password.length < 6) {
      return res.status(400).json({ error: "password too small" });
    }

    // existing user checking
    const existingUser = await User.find({ email: email });
    if (existingUser.length > 0) {
      return res.status(400).json({ error: `${email} already existing` });
    }

    // Generate OTP

    const OTP = await customOtpGen({ length: 5 });

    // password has and data store database

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const userData = new User({
          name: name,
          email: email,
          password: hash,
          role: role,
          otp: OTP,
        });
        userData.save();
        // send email for OTP
        jwt.sign({ email: email }, "shhhhh", function (err, token) {
          sendEmail(email, "emailVerification", token, "verified your email");
        });
        return res.status(200).json({
          status: "Registrations successfully Check Email",
          data: {
            name: userData.name,
            email: userData.email,
            role: userData.role,
          },
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
module.exports = registerController;
