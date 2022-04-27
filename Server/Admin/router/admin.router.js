let express = require('express');
let router = express.Router();

let AdminController = require("../controllers/admin.controller.js");

router.get("/adminDetails",AdminController.getAdminDetails);

module.exports=router;