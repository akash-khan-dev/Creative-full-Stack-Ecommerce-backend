const router = require("express").Router();
const registerController = require("../../controller/registerController");
const secureAPI = require("../../middleware/secureAPI");
router.post("/register", secureAPI, registerController);
module.exports = router;
