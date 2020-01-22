const http = require('http');

// create server gets two arguments from server after making request 
const server = http.createServer((req, res) => {

    console.log(`INCOMING REQUEST`)

    // Returns type of request method (Get, Post, Put etc)
    console.log(`Request method: ${req.method}`);

    // Returns URL requested
    console.log(`Request URL: ${req.url}`);

    if (req.method === 'POST') {

        let body = '';

        // Starts once finished parsing data
        req.on('end', () => {

            // To see what is returned in req body ( name=alex )
            console.log(`Req.body : ${body}`);

            // get name from body
            const userName = body.split('=')[1]

            res.end(`<h1> ${userName}</h1>`)
        })

        // Starts when data is sent to data, callback automatically returns data of data recieved
        req.on('data', (chunk) => {
            body += chunk
        })

    } else {

        // tells browser how to interpret our response
        res.setHeader('Content-Type', 'text/html')

        // This is sent back to wherever request was made from
        res.end(`<form method="POST"> <input type=text name="username"> </input> <button>Create User</button> </form>`)

    }


});

// listen is event listener for requests
// opens local server on machine 
server.listen(5000)