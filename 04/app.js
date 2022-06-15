const http = require('http');
const fs = require('fs');

//creat server

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html')

    // res.write('<p>asfdfsdf</p>');
    // res.end();


    fs.readFile('./04/views/index.html',(err,data)=>{

        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }

    })

})

server.listen('7000', 'localhost', () => {
    console.log('code at 7000');
})