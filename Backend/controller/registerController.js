const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const registerController = async (req, res, next) => {
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
    return res.status(400).json({ error: "Email already existing" });
  }

  // password has and data store database
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const userData = new User({
        name: name,
        email: email,
        password: hash,
        role: role,
      });
      userData.save();
      return res.status(200).json({
        name: name,
        email: email,
      });
    });
  });
};
module.exports = registerController;
