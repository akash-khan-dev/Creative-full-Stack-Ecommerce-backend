const SubCategory = require("../model/subCategoryModel");
const editSubCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const existingSubCategory = await SubCategory.findOne({
      name: name.toLowerCase().trim(),
    });
    if (existingSubCategory) {
      return res.status(400).json({
        status: "error",
        message: "subCategory already exists",
      });
    }
    const subCategory = await SubCategory.findOneAndUpdate(
      { _id: id },
      { $set: { name: name } }
    );

    return res.status(200).json({ message: "Category Edit successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = editSubCategoryController;
