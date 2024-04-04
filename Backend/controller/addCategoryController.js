const Category = require("../model/categoryModel");
const addCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const existingCategory = await Category.findOne({
      name: name.toLowerCase(),
    });
    if (existingCategory) {
      return res.status(400).json({
        status: "error",
        message: "Category already exists",
      });
    }
    const newCategory = new Category({
      name: name.toLowerCase(),
    });
    newCategory.save();
    return res.status(200).json({
      status: "success",
      message: "Category created successfully",
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = addCategoryController;
