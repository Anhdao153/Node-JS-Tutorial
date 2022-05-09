const http = require('http');

const server = http.createServer();

server.on('request', (req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html; charset=utf8"});
    res.end('chào mừng');
});
server.listen(7070);