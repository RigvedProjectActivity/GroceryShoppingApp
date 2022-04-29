let express = require("express");
let router = express.Router();  //router reference. 
const RequestsController = require("../../controller/admin/requests.controller.js");

//mapping sub path with http methods.
router.get("/getProdRequests",RequestsController.getProdRequests);

module.exports=router;