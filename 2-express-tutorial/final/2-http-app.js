// const express = require('express');
const http = require('http');
// const app = express();

const fs = require('fs');

const homePage = fs.readFileSync('./navbar-app/index.html');
const style = fs.readFileSync('./navbar-app/styles.css');
const js = fs.readFileSync('./navbar-app/browser-app.js');
const svg = fs.readFileSync('./navbar-app/logo.svg');

const application = http.createServer((req, res) => {

    const url = req.url;
    console.log(url);

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end();

    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(style);
        res.end();
    }

    else if (url === '/browser-app.js') {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(js);
        res.end();
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        res.write(svg);
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write('<h1>404</h1>');
        res.end();
    }
});
application.listen(1234);


    // app.get
    // app.post
    // app.put
    // app.delete
    // app.all
// app.use 
// app.listen