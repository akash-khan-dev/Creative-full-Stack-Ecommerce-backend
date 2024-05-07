const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productModel);

module.exports = Product;
