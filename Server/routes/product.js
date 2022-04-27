const express = require("express");
const router = express.Router();
var multer  = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});

var upload = multer({ storage: storage })
const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories
} = require("../controllers/product");



router.param("productId", getProductById);


router.post("/product/create",upload.single('productImage'),createProduct);

router.get("/product",getAllproduct);


router.get("/product/:productId", getProduct);



router.delete("/product/:productId",deleteProduct);



module.exports = router;
