
const { validationResult } = require('express-validator');
const jwt = require('jwt-simple');
let SignInModel = require("../../model/admin/signin.model.js");

let SignInFuction = (req,res)=> {
    //getting the id and password from the request body
    let AdminId = req.body.AdminId;       
    let Password = req.body.Password;
    //Key for the jwt web token
    let jwtKey="skjdbfksjdbf";
    //checking whether the request body cleared the validations 
    const errors = validationResult(req);
    //If any errors are present return the error message
      //Checking whether the id and password match the db credentials 
      //If pass make and return a jwt token
    SignInModel.find({_id:AdminId}[0],(err,data)=> {
        if(!err){
            if(data[0]._id==AdminId && data[0].Password==Password)
            {
            //res.send("Login Sucess");
            const token = jwt.encode(AdminId,jwtKey);
            res.send({token});
            }
            else{
                const token = "Enter Correct Credentials";
                 res.send({token});
            }
        }
        else{
            res.send("Wrong Admin Credentials Try Again");
        }
    })
}



module.exports={SignInFuction}