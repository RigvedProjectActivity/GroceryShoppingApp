let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let AdminSchema = mongoose.Schema({
    username:String,
    password:String
})

let AdminModel = mongoose.model("admin",AdminSchema,"Admin")

module.exports = AdminModel;