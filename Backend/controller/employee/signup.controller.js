/*
let empSignUpModel=require("../../model/employee/signup.model.js")


let storeEmpDetails=(req,res)=>{
    let emp= new empSignUpModel({
        userId:req.body.userId,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        EmailID:req.body.EmailID,
        password :req.body.password
    })
    emp.save((err,data)=>{
      if (!err){
        res.send("record stored successfully")
      }else{
        res.send("Fail")
      }
    })
  }
module.exports={storeEmpDetails}
*/