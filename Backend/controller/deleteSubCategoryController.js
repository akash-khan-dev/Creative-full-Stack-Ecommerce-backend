const SubCategoryModel = require("../model/subCategoryModel");

const deleteSubCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subcategory = await SubCategoryModel.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ message: "SubCategory deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = deleteSubCategoryController;
