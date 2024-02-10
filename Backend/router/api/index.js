const router = require("express").Router();
const register = require("./auth");
router.use("/user", register);

module.exports = router;
