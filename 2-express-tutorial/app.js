const http = require('http');

const server= http.createServer((req,res)=>{
    // trong server node js. Phải có ít nhất 1 res. trả về gì đó.
    res.end (`HOME PAGE`);
    console.log('user hit the server');
});

server.listen(1234);