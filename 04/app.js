/*

https module

*/

const http = require('http'); //nodemodule for server
const fs = require('fs'); //nodemodule for File System

//create Server
const server = http.createServer((req,res)=>{

    //req.url => for gettign the request url
    console.log('aaaa', req.url);
});

//server.listen(8000);

/*
Parameters for listen function
*/
server.listen(8000,'localhost',()=>{ //PortNumber, HostName and a callback function
    console.log('server is running on Port Number 8000')
})