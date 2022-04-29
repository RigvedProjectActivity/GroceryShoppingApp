let express = require("express");
let router = express.Router(); 
let UserSignInController= require("../../controller/user/signin.controller.js")

router.post("/userSignIn",UserSignInController.userSignInFunction)


router.post("/userSignUp",UserSignInController.storeUserDetails)

module.exports=router