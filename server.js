// require modules
const http = require('http');
const fs = require("fs");
const path = require('path');


// create port and host  
const hostname = '127.0.0.1';
const port = 3000;

// create a http server 
const server = http.createServer((req, res) => {

    // get the url 
    let url = req.url;
    console.log(url);

    // set content type and status code 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // create routes 
    if(url === "/"){
        
        fs.readFile('index.html', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // console.log(data);
            res.end(data);
        })
        
    }
    else if(url === "/about"){
        
        fs.readFile('about.html', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // console.log(data);
            res.end(data);
        })
    }
    else if(url === "/contact"){
        
        fs.readFile('contact-me.html', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // console.log(data);
            res.end(data);
        })
    }
    else{
        
        fs.readFile('404.html', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // console.log(data);
            res.end(data);
        })
    }
  
})

// activate server 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})