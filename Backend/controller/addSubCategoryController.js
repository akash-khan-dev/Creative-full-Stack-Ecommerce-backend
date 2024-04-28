const subCategoryModel = require("../model/subCategoryModel");
const addSubCategoryController = async (req, res, next) => {
  try {
    const { name, categoryId } = req.body;
    const existingSubCategory = await subCategoryModel.findOne({
      name: name.toLowerCase(),
    });

    if (existingSubCategory) {
      return res
        .status(400)
        .json({ status: "error", message: "Sub Category already exists" });
    }

    if (!categoryId) {
      return res
        .status(404)
        .json({ status: "error", message: "Please select category" });
    }

    const subCategory = new subCategoryModel({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });
    subCategory.save();

    return res.status(200).json({
      status: "success",
      message: "sub Category Created successfully",
    });
  } catch (err) {
    return res.status(404).json({ message: "note created sub category" });
  }
};
module.exports = addSubCategoryController;
