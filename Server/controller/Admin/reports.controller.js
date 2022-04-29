const OrderModel = require("../../model/user/order.model.js")

const getMonthlyReport = (req, res) => {
    const month = parseInt(req.params.month); //should be number of month
    const year = parseInt(req.params.year);

    OrderModel.find({
      $and: [
        { $expr: {$eq: [{$month: "$timestamp"}, month]} },
        { $expr: {$eq: [{$year: "$timestamp"}, year]} }
      ]
    }, (err, result) => {
      if(!err){
          //returns json of all entries of the specific day
          res.json(result);
      }
    });
}

const getDailyReport = (req, res) => {
    const date =  new Date(req.params.date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    OrderModel.find({
        $and: [
          { $expr: {$eq: [{$month: "$timestamp"}, month]} },
          { $expr: {$eq: [{$dayOfMonth: "$timestamp"}, day]} },
          { $expr: {$eq: [{$year: "$timestamp"}, year]} }
        ]
      }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}

const getWeeklyReport = (req, res) => {
  const startDate =  new Date(req.params.startDate);
  const endDate =  new Date(req.params.endDate);

  OrderModel.find({timestamp:{$gt:startDate,$lt:endDate}}, (err, result) => {
      if(!err){
          //returns json of all entries of the specific day
          res.json(result);
      }
    });
}

const getUserReport = (req, res) => {
    const id = req.params.id; 

    OrderModel.find({ userID: id }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}



module.exports={getDailyReport, getMonthlyReport, getUserReport, getWeeklyReport}