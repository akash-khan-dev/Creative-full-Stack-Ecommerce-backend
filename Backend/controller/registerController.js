const registerController = (req, res, next) => {
  const { name, email, password, role } = req.body;
  return res.send({ name: name, email: email, password: password, role });
};
module.exports = registerController;
