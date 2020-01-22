const http = require('http');

// create server gets two arguments from server after making request 
const server = http.createServer((req, res) => {
    
    console.log(`INCOMING REQUEST`)
    
    // Returns type of request method (Get, Post, Put etc)
    console.log(`Request method: ${req.method}`); 

    // Returns URL requested
    console.log(`Request URL: ${req.url}`);             

    // This is sent back to wherever request was made from
    res.end('<h1>Success</h1>')
});

// listen is event listener for requests
// opens local server on machine 
server.listen(5000)