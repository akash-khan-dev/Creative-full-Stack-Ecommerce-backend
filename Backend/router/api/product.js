const router = require("express").Router();
// const multer = require("multer");

const addCategoryController = require("../../controller/addCategoryController");
const addSubCategoryController = require("../../controller/addSubCategoryController");
const viewSubCategoryController = require("../../controller/viewSubCategoryController");
const viewCategoryController = require("../../controller/viewCategoryController");
const addProductController = require("../../controller/addProductController");
const verifyToken = require("../../middleware/verifyToken");
const secureAPI = require("../../middleware/secureAPI");

// image upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./images");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
router.post("/addcategory", secureAPI, verifyToken, addCategoryController);
router.post("/addsubcategory", addSubCategoryController);
router.get("/viewcategory", viewCategoryController);
router.get("/viewsubcategory", viewSubCategoryController);
router.post("/addprodect", addProductController);

module.exports = router;
