let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    //ProductID:Number,
    ProductName:String,
    ProductPrice:Number,
    ProductQuantity:Number,
    Discount:Number
})

let ProductModel = mongoose.model("",ProductSchema,"ProductDetails");

module.exports = ProductModel