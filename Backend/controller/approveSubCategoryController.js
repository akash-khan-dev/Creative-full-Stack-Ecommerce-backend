const SubCategoryModel = require("../model/subCategoryModel");
const approveSubCategoryController = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const subCategory = await SubCategoryModel.findByIdAndUpdate(
      { _id: id },
      { status: status == "waiting" ? "approved" : "waiting" },
      { new: true }
    );
    return res.status(200).json({ message: `Sub Category Update ` });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = approveSubCategoryController;
