const userSignInModel = require("../../model/user/signin.model");

let userSignInFunction = (req,res)=> {
  
    let UserId = req.body.UserId;       
    let Password = req.body.Password;
   
        let User =  userSignInModel.findOne({_id:UserId,Password:Password}, (err,data)=>{
       if(data._id==UserId && data.Password==Password){ res.send("Login Sucess");
         
        }else{
           const error= new Error("Wrong Credentials")
          throw error;
        }
    })
      }


      let storeUserDetails=(req,res)=>{
        let user= new userSignInModel({
          _id:req.body.userId,
           FirstName:req.body.FirstName,
          LastName:req.body.LastName,
          EmailID:req.body.EmailID,
          Password:req.body.Password
        })
        user.save((err,data)=>{
          if (!err){
            res.send("Register successfully")
          }else{
            res.send("Try again"+err)
          }
        })
      }

    module.exports={userSignInFunction,storeUserDetails}

       /* if(!err){
           if(data._id==UserId && data.Password==Password)
          // if(req.UserId==users[req.UserId] && req.Password==users[req.UserId].Password)
            {
           res.send("Login Sucess");
            }
            else{
                res.send("Fail Login! Try again"+err);
            }
        }
        
    })
}

  */     




