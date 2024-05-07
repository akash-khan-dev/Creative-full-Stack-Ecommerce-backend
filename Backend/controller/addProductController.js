const ProductModel = require("../model/productModel");
const multer = require("multer");
const addProductController = (req, res, next) => {
  try {
    const { name = "hello" } = req.body;
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./images");
      },
      filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
      },
    });
    const upload = multer({ storage: storage }).single("avatar");

    upload(req, res, function (err) {
      const image = req.file.path;
      const product = new ProductModel({
        name: name,
        image: image,
      });
      product.save();
    });

    return res
      .status(200)
      .json({ status: "success", message: "product added successfully" });
  } catch (err) {
    return res.status(404).json({ status: "error", message: err.message });
  }
};
module.exports = addProductController;
