const Cart = require("../model/cartModel");

const addCartController = async (req, res, next) => {
  try {
    const { productId, userId, quantity } = req.body;

    const existingCart = await Cart.findOne({
      productId: productId,
      userId: userId,
    });
    if (existingCart) {
      if (req.query.type) {
        if (req.query.type === "plus") {
          await Cart.findOneAndUpdate(
            { _id: existingCart._id },
            { quantity: existingCart.quantity + 1 },
            { new: true }
          );
          return res.status(200).json({ message: "product add successful" });
        } else {
          if (existingCart.quantity > 1) {
            await Cart.findOneAndUpdate(
              { _id: existingCart._id },
              { quantity: existingCart.quantity - 1 },
              { new: true }
            );
            return res.status(200).json({ message: "product add successful" });
          }
        }
        await Cart.findOneAndUpdate(
          { _id: existingCart._id },
          { quantity: existingCart.quantity + 1 },
          { new: true }
        );
        return res.status(200).json({ message: "product add successful" });
      } else {
        await Cart.findOneAndUpdate(
          { _id: existingCart._id },
          { quantity: existingCart.quantity + 1 },
          { new: true }
        );
        return res.status(200).json({ message: "product add successful" });
      }
    } else {
      const cart = new Cart({
        productId: productId,
        userId: userId,
        quantity: quantity ? quantity : 1,
      });
      cart.save();
    }
    return res.status(200).json({ message: "product add successful" });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
module.exports = addCartController;
