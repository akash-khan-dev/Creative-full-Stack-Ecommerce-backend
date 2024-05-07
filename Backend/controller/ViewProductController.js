const productModel = require("../model/productModel");

const ViewProductController = async (req, res, next) => {
  try {
    const product = await productModel.find();
    return res.status(200).json({ status: "success", data: product });
  } catch (err) {
    return res.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = ViewProductController;
