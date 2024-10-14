const ProductModel = require("../model/productModel");
const multer = require("multer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).array("avatar", 12);

const addProductController = async (req, res, next) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ message: "Multer error", err });
    } else if (err) {
      return res.status(500).json({ message: "Unknown error", err });
    }

    try {
      const {
        name,
        slug,
        regularPrice,
        discount,
        catId,
        subCatId,
        description,
        proType,
      } = req.body;

      let imageArr = [];
      req.files.map((item) => {
        imageArr.push(item.path);
      });

      // Now, you can create the new product with the file paths
      const product = new ProductModel({
        image: imageArr, // Assuming your model has an array for multiple images
        name: name,
        slug: slug,
        regularPrice: regularPrice,
        discount: discount,
        proType: proType,
        catId: catId,
        subCatId: subCatId,
        description: description,
      });

      await product.save();

      res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error saving product", error });
    }
  });
};

module.exports = addProductController;
