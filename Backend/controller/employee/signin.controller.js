const { validationResult } = require('express-validator');
let SignInModel= require("../../model/employee/signin.model.js")
const jwt = require('jwt-simple');

let SignInFunction=  (req,res)=>{
  
    let EmployeeId=req.body.EmployeeId
    let Password=req.body.Password
    let jwtKey="skjdbfksjdbf";
    console.log(EmployeeId);
     SignInModel.findOne({_id:EmployeeId},(err,data)=>{
       console.log(data);
       if(data==null)
       {
        const token = "Enter Correct ID";
        res.send({token});
       }
  
      else if(data.password!=Password)
      {
        const token = "Enter Correct password";
        res.send({token});
      }
      else{
        const token = jwt.encode(EmployeeId,jwtKey);
        res.send({token});
      }
    });


}
  
module.exports={SignInFunction}
    