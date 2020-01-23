// returns a function
const express = require('express')
// express function returns app object full of functions and features
const app = express()

// Provides middleware to parse request bodies ( we no longer need data chunks function)
const bodyParser = require('body-parser')

/*
 MiddleWare are functions called on incoming requests to do things 
 with requests and manipulate responses to send back, only 1 response allowed each.
*/

// bodyparser parses request bodies and extracts data from req.body, in this case urlEncoded Data, but could also be JSON
// app.use makes this run no matter what or where request is made
app.use(bodyParser.urlencoded({ extended: false }))

// app.post runs on post requests at '/user' of our server path. Must be exact match
app.post('/user', (req, res, next) => {

    // req.body.username is available because of bodyParser extracting form data
    res.send(`<h1> Hello ${req.body.username} </h1>`);

});

// app.get runs on get requests at ' / ' of our server path
app.get('/', (req, res, next) => {

    // method is post, form data will be post request to where action attribute directs , '/user'. We handle this above 
    res.send(`<form action= "/user" method="POST"> <input type="text" name="username"> <button>Create User</button> </form>`)

})

app.listen(5000)