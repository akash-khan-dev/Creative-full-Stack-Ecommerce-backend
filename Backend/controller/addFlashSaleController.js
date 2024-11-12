const flashSaleModel = require("../model/flashSaleModel");

const addFlashSaleController = async (req, res) => {
  try {
    const { time } = req.body;
    const existing = await flashSaleModel.findOne();
    if (existing) {
      const flashSale = await flashSaleModel.findByIdAndUpdate(
        { _id: existing._id },
        { time: time },
        { set: true }
      );
      return res
        .status(200)
        .json({ message: "Flash Product saved successfully", data: flashSale });
    } else {
      const flashSale = new flashSaleModel({ time }).save();
      return res
        .status(200)
        .json({ message: "Flash Product saved successfully", data: flashSale });
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

module.exports = addFlashSaleController;
