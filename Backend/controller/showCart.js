const CartModel = require("../model/cartModel");

const showCartController = async (req, res, next) => {
  try {
    const cart = await CartModel.find({}).populate("productId");
    return res.status(200).json({ data: cart });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

module.exports = showCartController;
