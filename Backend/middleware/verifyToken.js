const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.token;

    jwt.verify(token, "shhhhh", function (err, decoded) {
      if (!decoded) {
        return res
          .status(401)
          .json({ status: "error", message: "Invalid token" });
      }
      next();
    });
  } catch (err) {
    return res.status(403).json({ status: "error", message: err.message });
  }
};
module.exports = verifyToken;
