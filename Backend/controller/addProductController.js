const ProductModel = require("../model/productModel");

const addProductController = (req, res, next) => {
  try {
    const { name } = req.body;
    const image = `/images/${req.file.filename}`;

    const product = new ProductModel({
      name: name,
      image: image,
    });
    product.save();
    return res
      .status(200)
      .json({ status: "success", message: "product added successfully" });
  } catch (err) {
    return res.status(404).json({ status: "error", message: err.message });
  }
};
module.exports = addProductController;
