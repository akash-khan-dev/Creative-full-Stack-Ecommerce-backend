const subCategoryModel = require("../model/subCategoryModel");

const viewSubCategoryController = async (req, res, next) => {
  try {
    const subCategory = await subCategoryModel.find().populate("categoryId");
    return res.status(200).json({
      status: "success",
      data: {
        subCategory: subCategory,
      },
    });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = viewSubCategoryController;
