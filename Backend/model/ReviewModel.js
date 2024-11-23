const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ReviewModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  ratting: {
    type: Number,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: Schema.Types.String,
    ref: "User",
  },
  createdAt: {
    type: Date,
  },
});

const ProductReview = model("ReviewModel", ReviewModel);

module.exports = ProductReview;
