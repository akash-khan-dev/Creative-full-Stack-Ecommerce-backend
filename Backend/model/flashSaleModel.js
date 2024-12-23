const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const flashSaleModel = new Schema({
  time: {
    type: String,
    required: true,
  },
  selectProduct: [String],
});

const flashSale = model("FlashSale", flashSaleModel);

module.exports = flashSale;
