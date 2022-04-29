const EmployeeModel = require("../../model/employee/employee.model");
const OrderModel = require("../../model/user/order.model.js")
const TicketModel = require("../../model/user/ticket.model.js")
const UserModel = require("../../model/user/user.model.js")
const ProdReqModel = require("../../model/employee/requests.model");

const changeProductDetails = (req,res)=> {

    let changeproductCount;
    ProdReqModel.countDocuments().then((count) => {
        changeproductCount=count+1; 
        console.log(changeproductCount);    
        //
    let product = new ProdReqModel({
         _id:changeproductCount,
         EmployeeID:req.body.EmployeeID,
         ProductID:req.body.ProductID,
         ProductQuantity:req.body.ProductQuantity,
         ProductTask:req.body.ProductTask
     });
   
     product.save((err,result)=> {
         if(!err){
             res.send("Request sent successfully ")
         }else {
             res.send("Couldnt send request ");
         }
     })
     //    
    });

}

const getEmployeeDetails =(req,res)=> {

    EmployeeModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

const addEmployeeDetails = (req,res)=> {

    const employee = new EmployeeModel({
        _id:parseInt(req.body.id),
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailID:req.body.emailID,
        password: req.body.pwd
    });

    employee.save((err,result)=> {
        if(!err){
            res.send('Employee successfully added')
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("User already exists"); //check for other error cases
        }
    })

}

const deleteEmployeeDetails= (req,res)=> {
    const EmployeeID = parseInt(req.params.id);

    EmployeeModel.deleteOne({_id:EmployeeID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Employee deleted")
                }else {
                    res.send("Employee does not exist");
                }
        }else {
            res.send("Error generated "+err);
        }
    });

}

let editOrder = (req,res)=> {
    let id = req.body.id;
    let status = req.body.status;
    OrderModel.updateOne({_id: id}, {$set:{status: status}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Status updated succesfully")
            }else {
                    res.send("ID does not match any orders");
            }
        }else {
            res.send("Error: Please ensure your Order ID is valid");
        }
    })
}

let editProfile = (req,res)=> {
    let id = req.body.id;
    let oldPass = req.body.pass;
    let newPass = req.body.newPass;
    EmployeeModel.updateOne({_id: id, password: oldPass}, {$set:{password: newPass}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("User ID or Password is incorrect");
            }
        }else {
            res.send("Error: Please ensure your User ID is valid");
        }
    })
}

let getOrders = (req, res) => {
    OrderModel.find({}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

let getTickets= (req, res) => {
    TicketModel.find({}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    });
}

let unlockUser = (req,res)=> {
    let id = req.body.id;

    TicketModel.deleteOne({_id: id},(err,result)=> {
        if(!err){
            if(result.deletedCount > 0){
                UserModel.updateOne({_id: id}, {$set:{LoginAttempts: 3}}, (err, result)=> {
                    if(!err){
                        if(result.nModified > 0){
                                res.send("User unlocked succesfully")
                        }else {
                                res.send("ID not found");
                        }
                    }else {
                        res.send("Error: Please ensure your ID is valid");
                    }
                });
            }else {
                res.send("Ticket does not exist");
            }
        }else {
            res.send("Error generated " + err);
        }
    });
}

module.exports={addEmployeeDetails, deleteEmployeeDetails, getEmployeeDetails, editOrder, editProfile, getOrders, getTickets, unlockUser,changeProductDetails}