let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let empSignInSchema = mongoose.Schema({
    _id:Number,
    password:String,
    firstName:String,
    lastName:String,
    emailID:String
})




let empSignInModel=mongoose.model("empSignInModel",empSignInSchema,"EmployeeDetails")


module.exports = empSignInModel