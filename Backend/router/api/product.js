const router = require("express").Router();
const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");
const viewCategoryController = require("../../controller/viewCategoryController");

router.post("/addcategory", addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.get("/viewcategory", viewCategoryController);
router.get("/viewsubcategory", viewSubCategoryController);

module.exports = router;
