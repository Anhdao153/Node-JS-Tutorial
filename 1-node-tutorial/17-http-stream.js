const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./document/big.txt');
    res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
    // res.end(text);
    const fileStream = fs.createReadStream('./document/big.txt', 'utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    });
    fileStream.on('error',(err)=>{
        res.end(err);
    });
}).listen(7070);
