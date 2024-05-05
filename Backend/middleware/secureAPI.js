const secureAPI = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization !== process.env.API_SECRET) {
    return res.status(401).json({
      status: "Error",
      message: " Un authorization",
    });
  }
  next();
};
module.exports = secureAPI;
