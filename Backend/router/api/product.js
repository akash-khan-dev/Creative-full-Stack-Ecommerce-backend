const router = require("express").Router();

const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");
const viewCategoryController = require("../../controller/viewCategoryController");
const addProductController = require("../../controller/addProductController");
const ViewProductController = require("../../controller/ViewProductController");
const verifyToken = require("../../middleware/verifyToken");
const secureAPI = require("../../middleware/secureAPI");
const approveCategoryController = require("../../controller/approveCategoryController");
const deleteCategoryController = require("../../controller/deleteCategoryController");
const editCategoryController = require("../../controller/editCategoryController");
const approveSubCategoryController = require("../../controller/approveSubCategoryController");
const deleteSubCategoryController = require("../../controller/deleteSubCategoryController");

router.post("/addcategory", secureAPI, verifyToken, addCategoryController);
router.post("/approvecategory", approveCategoryController);
router.delete("/deletecategory/:id", deleteCategoryController);
router.put("/editcategory/:id", editCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.post("/approvesubcategory", approveSubCategoryController);
router.delete("/deletesubcategory/:id", deleteSubCategoryController);

router.get("/viewcategory", viewCategoryController);
router.get("/viewsubcategory", viewSubCategoryController);
router.post("/addprodect", addProductController);
router.get("/viewprodect", ViewProductController);

module.exports = router;
