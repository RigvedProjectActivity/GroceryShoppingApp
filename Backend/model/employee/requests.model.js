const mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const ProdRequestSchema = mongoose.Schema({
    _id:Number,
    EmployeeID:Number,
    ProductID:Number,
    ProductQuantity:Number,
    ProductTask:String
});

const ProdReqModel = mongoose.model("ProductQuantityTickets",ProdRequestSchema,"ProductQuantityTickets");

module.exports = ProdReqModel;