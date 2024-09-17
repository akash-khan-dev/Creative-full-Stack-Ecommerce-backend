const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categoryModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["approved", "waiting", "rejected"],
    default: "waiting",
  },
});

const Category = model("Category", categoryModel);

module.exports = Category;
