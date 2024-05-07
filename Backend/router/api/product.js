const router = require("express").Router();

const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");
const viewCategoryController = require("../../controller/viewCategoryController");
const addProductController = require("../../controller/addProductController");
const ViewProductController = require("../../controller/ViewProductController");
const verifyToken = require("../../middleware/verifyToken");
const secureAPI = require("../../middleware/secureAPI");

router.post("/addcategory", secureAPI, verifyToken, addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.get("/viewcategory", viewCategoryController);
router.get("/viewsubcategory", viewSubCategoryController);
router.post("/addprodect", addProductController);
router.get("/viewprodect", ViewProductController);

module.exports = router;
