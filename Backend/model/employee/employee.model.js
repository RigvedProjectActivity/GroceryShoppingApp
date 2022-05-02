const mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const EmployeeSchema = mongoose.Schema({
    _id:Number,
    firstName:String,
    lastName:String,
    emailID:String,
    password:String
});

const EmployeeModel = mongoose.model("EmployeeDetails",EmployeeSchema,"EmployeeDetails");

module.exports = EmployeeModel;