/*

https module

*/

const http = require('http'); //nodemodule for server
const fs = require('fs'); //nodemodule for File System

//create Server
const server = http.createServer((req, res) => {

    //req.url => for gettign the request url
    //req.method => for gettign the method
    console.log('Request was made: ', req.url, req.method);


    //request.setHeader(name, value) =>Sets a single header value for headers object

    //Serving Plain Text
    //res.setHeader('Content-Type','text/plain');

    //Serving HTML Text
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><title>this is test</title></head>');
    // res.write(`<p>Hello Ashish</p>`); //write response from the server

    //Serving HTML from the filesssytem
    fs.readFile('./04/views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data)
            res.end();
        }



    })


    //res.end(); //requestend and send back to server


    //serving plane text
    //res.writeHead(200,{'Content-Type': 'text-plain'});



});

//server.listen(8000);

/*
Parameters for listen function
*/
server.listen(8000, 'localhost', () => { //PortNumber, HostName and a callback function
    console.log('server is running on Port Number 8000')
})