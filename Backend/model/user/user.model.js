let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
    _id: Number,
    fName: String,
    lName: String,
    email: String,
    password: String,
    dob: String,
    pNumber: Number,
    address: String,
    funds: Number,
    accNumber: Number,
    LoginAttempts: Number
});

let UserModel = mongoose.model("userModel", UserSchema, "UserDetails");

module.exports = UserModel;