let express = require("express");
let router = express.Router();  //router reference. 
const { check, validationResult } = require('express-validator');

let SignInController = require("../../controller/employee/signin.controller.js");



router.post("/employeeSignIn",SignInController.SignInFunction)



module.exports=router;

