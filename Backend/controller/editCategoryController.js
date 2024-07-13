const Category = require("../model/categoryModel");
const editCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const existingCategory = await Category.findOne({
      name: name.toLowerCase().trim(),
    });
    if (existingCategory) {
      return res.status(400).json({
        status: "error",
        message: "Category already exists",
      });
    }
    const category = await Category.findOneAndUpdate(
      { _id: id },
      { $set: { name: name } }
    );

    return res.status(200).json({ message: "Category Edit successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = editCategoryController;
