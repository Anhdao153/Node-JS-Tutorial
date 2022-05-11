const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
});
app.get('/about',(req,res)=>{
    res.status(200).send('about Page');
});
app.all('*',(req,res)=>{
    res.status(404).send('NOT FOUND');
});
app.listen(1234,()=>{
    console.log('this server is running on port 1234.....');
});