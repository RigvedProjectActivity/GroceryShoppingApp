let express = require('express');
let router = express.Router();

let UserController = require('../controller/users.controller');

router.post('/signUp', UserController.storeUserDetails);
router.get('/getUserById/:pid', UserController.getUserById);
router.put('/updateUserPassword/:uid', UserController.updateUserPassword);
router.put('/updateUserEmail/:uid', UserController.updateUserEmail);
router.put('/updateUserAddress/:uid', UserController.updateUserAddress);
router.put('/updateUserPhone/:uid', UserController.updateUserPhone);
router.get('/getUserDetails/:email', UserController.getUserDetails);


module.exports = router;
