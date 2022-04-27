
let express = require('express')
let app = express();

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:27017/GrocerryApp';

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());

//db connection
const mongodb = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, mongodb); 
mongoose.connection;

app.listen(3000, () => console.log('Server is running on port number 3000'));

var Users = require('./Users/router/user.router.js');
var Employee = require('./Employees/router/emp.router.js');
var Admin = require('./Admin/router/admin.router.js');
var Product = require('./Products/router/product.router.js');

app.use('/product', Product);
app.use('/', Users);
app.use('/emp', Employee);
app.use('/admin', Admin);


