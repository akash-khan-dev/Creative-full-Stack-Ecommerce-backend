const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  regularPrice: {
    type: String,
  },
  discount: {
    type: String,
  },
  catId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subCatId: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productModel);

module.exports = Product;
