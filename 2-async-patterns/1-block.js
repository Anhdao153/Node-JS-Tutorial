const http = require('http');

const server= http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html; charset = utf8"});
    if(req.url ==='/'){
        res.end('Home Page');
    }
    if (req.url ==='/about') {
        //blocking code
        for (let i = 0; i < 1000; i++) {
           for (let j = 0; j< 1000; j++){
            console.log(`${i}   ${j}`);
           }
           
            
        }
        res.end('About Page');
    }
    console.log('Error Page');
});

server.listen(5050, ()=>{
    console.log('server is listening on port 5050.....');
});