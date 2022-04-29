let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../../controller/admin/product.controller.js");
const { check, validationResult } = require('express-validator');

//mapping sub path with http methods. 
router.post("/addProductDetails",ProductController.addProductDetails);

router.delete("/deleteProductDetailsById/:ProductID",ProductController.deleteProductDetailsById);

router.put("/updateProductDetails",ProductController.updateProductDetails);

router.get("/allProductDetails",ProductController.getProductDetails);

module.exports=router;