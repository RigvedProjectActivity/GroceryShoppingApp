let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
const { response } = require('express');
let mongoClient = require('mongodb').MongoClient;
let PORT = 3000;
let dbUrl = 'mongodb://localhost:27017';

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));

app.use(cors());
app.use(bodyParser.json());

// Add Products

app.post('/product', (request, response) => {
  mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
    if(error) {
      throw error;
    } else {
      let db = client.db('GrocerryApp');
      let product = request.body;
      db.collection('product').insertOne(product, (err, res) => {
        if(err) {
          response.status(409).json({'message':`Product ${product._id} exists`})
        }else {
          response.status(201).json(res);
          client.close();
        }
      });
    }
  });
});

// Delete Products

app.delete("/product/:name", (request, response) => {
  let name = request.params.name;
  mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
    if(error) {
      throw error;
    }else {
      let db = client.db('GrocerryApp');
      db.collection('product').deleteOne({name: name})
      .then(doc => {
        if(doc != null) {
          response.status(200).json(doc);
        }else {
          response.status(404).json({"message": `${name} is incorrect`});
        }
        client.close();
      });
    }
  });
});

// Update Products price, quantity, discount

app.put('/product/:name/:price/:quantity/:discount', (request, response) => {
  let name = request.params.name;
  let price = parseInt(request.params.price);
  let quantity = parseInt(request.params.quantity);
  let discount = parseInt(request.params.discount);
  mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
    if(error) {
      throw error;
    }else {
      let db = client.db('GrocerryApp');
      db.collection('product').updateOne({name: name}, {$set:{price: price, quantity: quantity, discount: discount}})
      .then((doc) => {
        if(doc != null) {
          response.status(200).json(doc);
        }else {
          response.status(404).json({"message": `${name} is incorrect`});
        }
      });
    }
  });
});


