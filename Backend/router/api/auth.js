const router = require("express").Router();
const registerController = require("../../controller/registerController");
const otpController = require("../../controller/optController");
const secureAPI = require("../../middleware/secureAPI");

router.post("/register", registerController);
router.post("/otp", otpController);

module.exports = router;
