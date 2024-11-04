const mongoose = "mongoose";
const { Schema, model } = mongoose;

const cartModel = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  quantity: Number,
});

module.exports = model("Cart", cartModel);
