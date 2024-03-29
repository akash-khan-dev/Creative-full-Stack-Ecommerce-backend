const router = require("express").Router();
const registerController = require("../../controller/registerController");
const otpController = require("../../controller/optController");
const loginController = require("../../controller/loginController");
const linkController = require("../../controller/linkController");
const resetMailController = require("../../controller/resetMailController");
const forgotPasswordController = require("../../controller/forgotPasswordController");
const secureAPI = require("../../middleware/secureAPI");
const newPasswords = require("../../controller/newPassword");

router.post("/register", registerController);
router.post("/otp", otpController);
router.post("/linkVerified", linkController);
router.post("/resetMail", resetMailController);
router.post("/forgotpass", forgotPasswordController);
router.post("/newpass", newPasswords);
router.post("/login", loginController);

module.exports = router;
