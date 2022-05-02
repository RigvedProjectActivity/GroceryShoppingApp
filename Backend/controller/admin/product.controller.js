
const { validationResult } = require('express-validator');
let ProductModel = require("../../model/admin/product.model.js");


let addProductDetails = (req,res)=> {
    let productCount;
    ProductModel.countDocuments().then((count) => {
        productCount=count+1; 
        console.log(productCount);    
        //
    let product = new ProductModel({
         _id:productCount,
         ProductName:req.body.ProductName,
         ProductPrice:req.body.ProductPrice,
         ProductQuantity:req.body.ProductQuantity,
         Discount:req.body.Discount
     });
   
     product.save((err,result)=> {
         if(!err){
             res.send("Product added successfully ")
         }else {
             res.send("Product didn't add ");
         }
     })
     //    
    });
    

}


let deleteProductDetailsById= (req,res)=> {
    let ProductID = req.params.ProductID;
    ProductModel.deleteOne({_id:ProductID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Product deleted successfully")
                }else {
                    res.send("Product not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateProductDetails= (req,res)=> {
    let ProductID = req.body.ProductID;
    let ProductPrice=req.body.ProductPrice;
    let ProductQuantity=req.body.ProductQuantity;
    let Discount=req.body.Discount;
    ProductModel.updateMany({_id:ProductID},{$set:{ProductPrice:ProductPrice,ProductQuantity:ProductQuantity,Discount:Discount}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Product updated succesfully")
            }else {
                    res.send("Product is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let getProductDetails =(req,res)=> {

    ProductModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

module.exports={addProductDetails,deleteProductDetailsById,updateProductDetails,getProductDetails}