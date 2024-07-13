const Category = require("../model/categoryModel");

const deleteCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Category deleted" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
module.exports = deleteCategoryController;
