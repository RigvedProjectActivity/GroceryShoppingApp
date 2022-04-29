let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let userSignInSchema = mongoose.Schema({
    _id:Number,
    password:String,
    FirstName:String,
    LastName:String,
    EmailID:String,
    DOB:Date,
    PhoneNumber:Number,
    Address:String,
    Funds:Number,
    AccountNumber:Number,
    LoginAttempts: Number
})




let userSignInModel=mongoose.model("userSignInModel",userSignInSchema,"UserDetails")


module.exports = userSignInModel