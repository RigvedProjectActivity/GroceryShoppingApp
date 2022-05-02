/*
let express = require("express");
let router = express.Router();  //router reference. 
const { check, validationResult } = require('express-validator');

let SignUpController= require("../../controller/employee/signup.controller.js")



router.post("/employeeSignUp",[check('AdminId').not().isEmpty().withMessage('Please enter a id'),
check('Password').not().isEmpty().withMessage('Please enter a password'),],SignUpController.storeEmployeeDetails)

module.exports=router;
*/
