const ReviewModel = require("../model/ReviewModel");
const viewReviewController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const allReview = await ReviewModel.find({ productId: id });

    return res.status(200).json({ data: allReview });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = viewReviewController;
