const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subCategoryModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["approved", "waiting", "rejected"],
    default: "waiting",
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});
const subCategory = model("SubCategory", subCategoryModel);
module.exports = subCategory;
