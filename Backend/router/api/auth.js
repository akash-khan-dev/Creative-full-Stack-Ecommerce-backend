const router = require("express").Router();
const registerController = require("../../controller/registerController");
const loginController = require("../../controller/loginController");
const linkController = require("../../controller/linkController");
const resetMailController = require("../../controller/resetMailController");
const forgotPasswordController = require("../../controller/forgotPasswordController");
const secureAPI = require("../../middleware/secureAPI");
const newPasswords = require("../../controller/newPassword");
const otpMatchController = require("../../controller/otpMatch");

router.post("/register", registerController);
router.post("/linkVerified", linkController);
router.post("/resetMail", resetMailController);
router.post("/forgotpass", forgotPasswordController);
router.post("/newpass", newPasswords);
router.post("/login", loginController);
router.post("/otpMatch", otpMatchController);

module.exports = router;
