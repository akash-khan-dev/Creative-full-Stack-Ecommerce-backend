const User = require("../model/userModel");
const registerController = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({ error: "please fill the all field" });
  }
  const userData = new User({
    name: name,
    email: email,
    password: password,
    role: role,
  });
  userData.save();
  return res.send(userData);
};
module.exports = registerController;
