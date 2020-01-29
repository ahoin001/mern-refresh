const express = require('express')
const bodyParser = require('body-parser')

const mongooseController = require('./mongoose')


app = express();

app.use(bodyParser.json());

app.get('/products', mongooseController.getProducts);

app.post('/products', mongooseController.createProduct);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});