let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let selectedOrdersSchema = mongoose.Schema({
    _id:Number, 
    ProductName:String, 
    ProductPrice:Number, 
    ProductQuantity:Number, 
    Discount:Number,
});

let SelectedOrdersModel = mongoose.model("selectedOrders", selectedOrdersSchema, "Orders");

module.exports = SelectedOrdersModel;