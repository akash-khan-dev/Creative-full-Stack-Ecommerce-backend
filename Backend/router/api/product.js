const router = require("express").Router();
const addCategoryController = require("../../controller/addCategoryController");

router.post("/addcategory", addCategoryController);

module.exports = router;
