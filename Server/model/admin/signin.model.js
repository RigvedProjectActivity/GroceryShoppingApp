let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let SignInSchema = mongoose.Schema({
    _id:Number,
    Password:String
})



let SignInModel = mongoose.model("modelAdminSigin",SignInSchema,"AdminCredentials");

module.exports = SignInModel

