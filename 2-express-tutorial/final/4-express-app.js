const express = require('express');
const path = require('path');
const app = express();
// set up static file and middleware
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
});

app.all('*',(req,res)=>{
    res.status(404).send('Not Found');
});
app.listen(1234);