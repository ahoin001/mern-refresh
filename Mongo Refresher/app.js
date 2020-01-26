const express = require('express')
const bodyParser = require('body-parser')

app = express();

app.use(bodyParser.json());

app.get('/products');

app.post('/products');

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});