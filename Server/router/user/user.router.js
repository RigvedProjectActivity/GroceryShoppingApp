let express = require("express");
let router = express.Router();
let UserController = require("../../controller/user/user.controller.js")

// Route for retrieving order status
router.get("/retrieveOrder/:id", UserController.getOrderById);
router.get("/getUser/:id", UserController.getUserById);
router.put("/editProfile", UserController.editProfile);
router.put("/changeFunds", UserController.changeFunds);
router.post("/newOrders", UserController.newOrders);
router.post("/addTicket", UserController.addTicket);
router.get("/retrieveFunds/:id", UserController.getFundsById);
router.post("/userSignIn", UserController.SignInFunction);
router.post("/userSignUp", UserController.SignUpFunction);
router.put("/subtractProductQuantity", UserController.subtractProductQuantity);

module.exports = router;