const registerController = (req, res, next) => {
  const { name, email, password } = req.body;
  return res.send({ name: name, email: email, password: password });
};
module.exports = registerController;
