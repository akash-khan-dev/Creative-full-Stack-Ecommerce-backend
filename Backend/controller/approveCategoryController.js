const Category = require("../model/categoryModel");
const approveCategoryController = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const category = await Category.findByIdAndUpdate(
      { _id: id },
      { status: status == "waiting" ? "approved" : "waiting" },
      { new: true }
    );
    return res.status(200).json({ message: "category updated " });
  } catch (e) {
    return res.status(400).json({ message: "Invalid request" });
  }
};

module.exports = approveCategoryController;
