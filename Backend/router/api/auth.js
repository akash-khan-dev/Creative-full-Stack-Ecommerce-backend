const router = require("express").Router();
const registerController = require("../../controller/registerController");
const otpController = require("../../controller/optController");
const loginController = require("../../controller/loginController");
const secureAPI = require("../../middleware/secureAPI");

router.post("/register", registerController);
router.post("/otp", otpController);
router.post("/login", loginController);

module.exports = router;
