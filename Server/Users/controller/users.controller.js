
let UserModel = require('../user-model/user.model.js');
const ObjectId = require('mongodb').ObjectId;

//adding users
let storeUserDetails = (req, res) => {
  let product = new UserModel({
    name: req.body.fname,
    email: req.body.email,
    pass: req.body.pass,
    phone: req.body.phone,
    address: req.body.address,
    funds: 1000,
    locked: false,
  });
  let uid;
  product.save((err, result) => {
    if (!err) {
      res.send('User Add successfully ..!!');
    } else {
      res.send("User didn't store...");
    }
  });

  UserModel.find({}, (err, result) => {
    // gets it to display on the back end
    console.log(result[result.length - 1]);
    uid = result.length - 1;
    if (!err) {
      // cannot get it to send idk why
    }
  });
};

let getUserById = (req, res) => {
  let pid = req.params.pid;
  UserModel.find({ _id: pid }, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};
let getUserDetails = (req, res) => {
  let email = req.param.email;
  UserModel.find({ email: email }, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};


let updateUserPassword = (req, res) => {
  let uid = req.params.uid;
  let newPass = req.body.newPass;
  UserModel.updateMany(
    { _id: uid },
    { $set: { pass: newPass } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated succesfully');
        } else {
          res.send('Record is not available');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};
let updateUserEmail = (req, res) => {
  let uid = req.params.uid;
  let newEmail = req.body.newEmail;
  UserModel.updateMany(
    { _id: uid },
    { $set: { email: newEmail } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated succesfully');
        } else {
          res.send('Record is not available');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};
let updateUserAddress = (req, res) => {
  let uid = req.params.uid;
  let newAdd = req.body.newAdd;
  UserModel.updateMany(
    { _id: uid },
    { $set: { address: newAdd } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated succesfully');
        } else {
          res.send('Record is not available');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};
let updateUserPhone = (req, res) => {
  let uid = req.params.uid;
  let newPhone = req.body.newPhone;
  UserModel.updateMany(
    { _id: uid },
    { $set: { phone: newPhone } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated succesfully');
        } else {
          res.send('Record is not available');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};


module.exports = {
  
  storeUserDetails,
  getUserById,
  updateUserPassword,
  updateUserEmail,
  updateUserAddress,
  updateUserPhone,
  getUserDetails,
 
};
