// create http server by requiring the http object
const http = require('http')
const fs = require("fs");
const path = require('path')


// declear port and host name 
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);

    if(url === "/"){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('HOME\n')
    }
    else if(url === "/about"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("ABOUT")
    }
    else if(url === "/contact"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("CONTACT")
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404")
    }
  
})

// activate server 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})