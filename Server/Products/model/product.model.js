let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number
})

let ProductModel = mongoose.model("product",ProductSchema,"Product")

module.exports = ProductModel;