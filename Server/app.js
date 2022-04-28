let express = require("express");
let app = require("express")();

let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("cors");
const SignInModel = require('./model/admin/signin.model');

app.use(express.static(process.cwd()));

const PORT = 3001 

let url = "mongodb://localhost:27017/groceryStore";


app.use(bodyParser.urlencoded({extended:true}));   
app.use(bodyParser.json());                         
app.use(cors());          


const mongooseDb ={       
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDb);   
mongoose.connection


SignInModel.find({},async (error,data)=>{
    if(data.length==0){
        adminLogin = new SignInModel();
        adminLogin._id = "123";
        adminLogin.Password = "admin123";
        adminLogin.save();
    }
});



var adminSignIn=require("./router/admin/signin.router.js");
var User = require("./router/user/user.router.js");
const Employee = require("./router/employee/employee.router.js");
const empSignIn = require("./router/employee/signin.router.js");


app.use("/admin",adminSignIn);
app.use("/admin/employee",Employee);
app.use("/user", User);
app.use("/employee", Employee)

app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));