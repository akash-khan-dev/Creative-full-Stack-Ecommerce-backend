const SubCategory = require("../model/subCategoryModel");
const singleSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.find({ categoryId: id });
    return res.status(200).json({ subcategory: subCategory });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = singleSubCategory;
