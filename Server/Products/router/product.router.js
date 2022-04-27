let express = require('express');
let router = express.Router(); //router reference
let ProductController = require("../controller/product.controller.js");

router.get("/viewProducts",ProductController.getProductDetails);
router.get("/selectProduct/:pid",ProductController.getProductById);
router.post("/storeProductDetails",ProductController.storeProdectDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProdectById);
router.put("/updateProductById",ProductController.updateProdectDetails);

module.exports=router;