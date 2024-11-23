const User = require("../model/userModel");
const ReviewModel = require("../model/ReviewModel");
const addReviewController = async (req, res, next) => {
  try {
    const { name, email, review, ratting, productId } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const newReview = new ReviewModel({
      name: name,
      email: email,
      comment: review,
      ratting: ratting,
      productId: productId,
      userId: existingUser._id,
    }).save();
    return res
      .status(200)
      .json({ message: "review successfully", data: newReview });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = addReviewController;
