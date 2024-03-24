const router = require("express").Router();
const registerController = require("../../controller/registerController");
const otpController = require("../../controller/optController");
const loginController = require("../../controller/loginController");
const linkController = require("../../controller/linkController");
const resetMailController = require("../../controller/resetMailController");
const secureAPI = require("../../middleware/secureAPI");

router.post("/register", registerController);
router.post("/otp", otpController);
router.post("/linkVerified", linkController);
router.post("/resetMail", resetMailController);
router.post("/login", loginController);

module.exports = router;
