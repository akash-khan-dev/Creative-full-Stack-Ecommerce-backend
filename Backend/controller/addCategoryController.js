const Category = require("../model/categoryModel");
const multer = require("multer");
const addCategoryController = async (req, res, next) => {
  try {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./images");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
      },
    });
    const upload = multer({ storage: storage }).single("avatar");
    upload(req, res, async function (err) {
      const { name } = req.body;

      const image = req.file.path;
      const newCategory = new Category({
        name: name.toLowerCase(),
        image: image,
      });
      const existingCategory = await Category.findOne({
        name: name.toLowerCase(),
      });
      if (existingCategory) {
        return res.status(400).json({
          status: "error",
          message: "Category already exists",
        });
      }
      newCategory.save();
      return res.status(200).json({
        status: "success",
        message: "Category created successfully",
        data: {
          category: newCategory,
        },
      });
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = addCategoryController;
