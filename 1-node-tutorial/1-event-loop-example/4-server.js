const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
    res.end('xin chào thế giới');
});

server.listen(5050, () => {
    console.log('serve listening on port 5000:....');
});