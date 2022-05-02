let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let BankSchema = mongoose.Schema({
    _id: Number,
    userId: Number,
    funds: Number
});

let BankModel = mongoose.model("bankModel", BankSchema, "userBank");

module.exports = BankModel;