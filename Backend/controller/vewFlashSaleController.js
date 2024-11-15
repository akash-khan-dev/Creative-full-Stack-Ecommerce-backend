const flashSaleModel = require("../model/flashSaleModel");

const vewFlashSaleController = async (req, res, next) => {
  try {
    const flashSale = await flashSaleModel.find();
    return res.status(200).json({ data: flashSale });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
module.exports = vewFlashSaleController;
