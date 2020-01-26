const express = require('express')
const bodyParser = require('body-parser')

// get access to our mongo controllers
const mongoController = require('./mongo')

app = express();

app.use(bodyParser.json());

app.get('/products', mongoController.getProducts);

app.post('/products', mongoController.createProduct);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});