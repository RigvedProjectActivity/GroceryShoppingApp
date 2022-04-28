let express = require("express");
let router = express.Router();  //router reference. 
let SignInController = require("../../controller/admin/signin.controller.js");
const { check, validationResult } = require('express-validator');

router.post("/adminSignIn",
SignInController.SignInFuction);

module.exports=router;