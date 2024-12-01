const cardModel = require("../model/cartModel");
const deleteCardProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await cardModel.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ message: "Card Product deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = deleteCardProductController;
