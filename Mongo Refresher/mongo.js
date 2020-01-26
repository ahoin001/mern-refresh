const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://Alex:Alex9595@cluster0-6ofkv.mongodb.net/products_test?retryWrites=true&w=majority'


const createProduct = async (req, res, next) => {

    console.log('POSTING PRODUCTS++++++++', req.body)

    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }

    // Get server we want to connect to 
    const client = new MongoClient(url)

    try {

        // Connect to mongo db server
        await client.connect();

        // Get access to database
        // db() method uses url as argument, or uses url from mongoClient we created to access database
        const db = client.db();

        // if collection exsists, will insert into it, if not it will create 'products' collection then insert
        const result = db.collection('products').insertOne(newProduct)


    } catch (error) {

        return res.json({ message: 'Failed to store data' })

    }

    // Close connection
    client.close()

    res.json(newProduct)
}

const getProducts = async (req, res, next) => {
    
    console.log('GETTING PRODUCTS++++++++');

    // Get server we want to connect to 
    const client = new MongoClient(url)

    let products;

    try {

        // Connect to mongo db server
        await client.connect();

        // Get access to database
        // db() method uses url as argument, or uses url from mongoClient we created to access database
        const db = client.db();

        // await since itis async 
        // if collection exsists, will return all documents as array
        products = await db.collection('products').find().toArray()

    } catch (error) {

        return res.json({ message: 'Could not recieve products' })

    }

    // Close connection
    client.close()

    res.json(products)
}

exports.createProduct = createProduct
exports.getProducts = getProducts