const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/home') {
        // var body = ` <h1>!Oops!</h1>
        // <p>there no information for you || NOT FOUND || Không tìm thấy</p>`

        res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
        // res.write(body,'utf-8')
        res.end('welcome to my home page | chào mừng đến với trang chủ', 'utf8');
    } if (req.url ==='/about') {
        res.end('history page | lịch sử trang','utf8');
    } if (req.url==='/') {
        res.end(`
        <h1>!Oops!</h1>
        <p>there no information for you || NOT FOUND || Không tìm thấy</p>
        `,'utf8')
    }
})

server.listen(8080)