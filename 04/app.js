//https module


const http = require('http');
const fs = require('fs'); 


const server = http.createServer((req,res)=>{
console.log('aaaa', req.url);
});


server.listen(8000);