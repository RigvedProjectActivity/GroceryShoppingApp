let EmployeeModel = require('../model/employee.model.js');
const ObjectId = require('mongodb').ObjectId;


let getEmpByID = (req, res) => {
  let pid = req.params.pid;
  EmployeeModel.find({ _id: new ObjectId(pid)}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

//adding emp
let empUserDetails = (req, res) => {
  let emp = new EmployeeModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: 'Welcome123',
  });

  emp.save((err, result) => {
    if (!err) {
      res.send('Records stored successfully');
    } else {
      res.send("Record didn't store...");
    }
  });
};

//delete
let deleteEmpById = (req, res) => {
  let pid = req.params.pid; //passing the id through path param
  EmployeeModel.deleteOne({ _id: pid }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('Employee deleted successfully');
      } else {
        res.send('No such Employee');
      }
    }
  });
};

//edit employee profile
let editEmpPro = (req, res) => {
  let eid = req.body.eid;
  let bemail = req.body.email.trim();
  let bfirstname = req.body.firstname.trim();
  let blastname = req.body.lastname.trim();
  let bpassword = req.body.password.trim();
  EmployeeModel.updateOne(
    { _id: new ObjectId(eid) },
    {
      $set: {
        fname: bfirstname,
        lname: blastname,
        email: bemail,
        pass: bpassword,
      },
    }
  )
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}; 
let changeEmpPassword = (req,res) =>{
  let eid = req.params.eid;
  let newPass = req.body.newPass;
  console.log(eid, newPass)
  EmployeeModel.updateOne({_id: eid},{$set: {pass: newPass}}, (err, result) => {
    if (!err) {
      if (result.nModified > 0) {
        res.send('Employee pass updates successfully');
      } else {
        res.send('No such Employee');
      }
    }
  });
}
module.exports = { empUserDetails, deleteEmpById, editEmpPro, getEmpByID,changeEmpPassword };
