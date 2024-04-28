const router = require("express").Router();
const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");

router.post("/addcategory", addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.post("/viewsubcategory", viewSubCategoryController);

module.exports = router;
