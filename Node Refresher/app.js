// returns a function
const express = require('express')

// express function returns app object full of functions and features
const app = express()

// MiddleWare are functions called on incoming requests to do things 
// with requests and manipulate responses to send back, only 1 response allowed each.

app.use((req, res, next) => {

    let body = '';

    // Starts once finished parsing data
    req.on('end', () => {

        // To see what is returned in req body ( name=alex )
        console.log(`Req.body : ${body}`);

        // get name from body
        const userName = body.split('=')[1]

        if (userName) {

            req.body = { name: userName };

        }

        // move to next middleware after parsing data (creating req.body.name)
        next();
        
        // console.log('Server not respondig without next going to next middleware that has response')

    });

    // Starts when data is sent to data, callback automatically returns data of data recieved
    req.on('data', (chunk) => {
        body += chunk
    });

});

app.use((req, res, next) => {

    // if we have parsed req.body
    if (req.body) {
        return res.send(`<h1> ${req.body.name} </h1>`);
    }

    res.send(`<form method="POST"> <input type="text" name="username"> <button>Create User</button></form>`)

})


app.listen(5000)