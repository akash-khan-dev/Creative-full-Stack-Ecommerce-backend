const router = require("express").Router();
const registerController = require("../../controller/registerController");
router.get("/register", registerController);

module.exports = router;
