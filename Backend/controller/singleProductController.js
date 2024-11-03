const Product = require("../model/productModel");
const singleProductController = async (req, res, next) => {
  try {
    const { slug } = req.params;
    console.log(slug);

    const product = await Product.findOne({ slug: slug });
    return res.status(200).json({ data: product });
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};
module.exports = singleProductController;
