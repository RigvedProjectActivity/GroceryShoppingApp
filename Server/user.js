let app = require("express")();

let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

let url = "mongodb://localhost:27017/groceryStore";

const PORT = 3001

app.use(bodyParser.urlencoded({extended:true}));   
app.use(bodyParser.json());                         
app.use(cors());  


const mongooseDb ={       
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDb);   
mongoose.connection



var user=require("./router/user/signin.router")
app.use("/user",user)

app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));