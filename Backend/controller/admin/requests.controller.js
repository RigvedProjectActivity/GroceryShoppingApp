const ProdReqModel = require("../../model/employee/requests.model");

const getProdRequests = (req, res) => {
    ProdReqModel.find({}, (err, result) => {
        if(!err){
            //returns json of all entries of the specific month
            res.json(result);
        }
      });
}


module.exports={getProdRequests}