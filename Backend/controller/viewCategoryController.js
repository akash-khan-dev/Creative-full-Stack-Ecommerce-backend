const categoryModel = require("../model/categoryModel");
const viewCategoryController = async (req, res, next) => {
  try {
    const category = await categoryModel.find();
    return res.status(200).json({
      status: "success",
      data: {
        category: category,
      },
    });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = viewCategoryController;
