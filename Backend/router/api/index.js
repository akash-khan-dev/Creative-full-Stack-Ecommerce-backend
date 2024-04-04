const router = require("express").Router();
const authRoute = require("./auth");
const productRoute = require("./product");
router.use("/user", authRoute);
router.use("/product", productRoute);

module.exports = router;
