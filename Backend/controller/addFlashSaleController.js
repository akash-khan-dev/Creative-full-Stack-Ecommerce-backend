const flashSaleModel = require("../model/flashSaleModel");

const addFlashSaleController = async (req, res) => {
  try {
    const { time, productList } = req.body;
    const existing = await flashSaleModel.findOne();
    console.log();

    if (existing) {
      const updatedProductList = Array.from(
        new Set([...existing.selectProduct, ...productList])
      );
      const flashSale = await flashSaleModel.findByIdAndUpdate(
        { _id: existing._id },
        { time: time, selectProduct: updatedProductList },
        { set: true }
      );
      return res
        .status(200)
        .json({ message: "Flash Product saved successfully", data: flashSale });
    } else {
      const flashSale = new flashSaleModel({
        time: time,
        selectProduct: productList,
      }).save();
      return res
        .status(200)
        .json({ message: "Flash Product saved successfully", data: flashSale });
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

module.exports = addFlashSaleController;
