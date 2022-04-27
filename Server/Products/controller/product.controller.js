let ProductModel = require('../model/product.model.js');

//view  retrieve all product details
let getProductDetails = (req,res)=>{
    ProductModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}
//select
let getProductById = (req,res)=>{
    let pid = req.params.pid;       //passing the id through path param
    ProductModel.find({_id:pid},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}
//add
let storeProdectDetails = (req,res)=>{
    let product = new ProductModel({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity
    });
    console.log(product)
    product.save((err,result)=>{
        if(!err){
            res.send("Records stored successfully")
        } else {
            res.send("Record didn't store...")
        }
    })
}
//delete
let deleteProdectById = (req,res)=>{
    let pid = req.params.pid;       //passing the id through path param
    ProductModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("No such Product")
            }
        } 
    })
}

let updateProdectDetails = (req,res)=>{
    let pid = req.body.pid;       //passing the id through path param
    let upPrice = req.body.price;
    let newQuant = req.body.quantity;
    ProductModel.updateMany({_id:pid},{$set:{quantity:newQuant,price:upPrice,}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Record updated successfully")
            } else {
                res.send("No such Product")
            }
        } else {
            res.send("Error generated "+err)
        }
    })
}

module.exports={getProductDetails, getProductById,storeProdectDetails,deleteProdectById,updateProdectDetails}