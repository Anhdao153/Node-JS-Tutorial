// import thư viện 
const express = require('express');
const tasks = require('./routes/tasks');
// import file database
const connectDB =require('./db/connect');
require('dotenv').config();

// import express module and port 
const app = express();
const port = 1234;

// middleware
app.use(express.json());


// router
app.get('/',(req,res)=>{
    res.write('Hello World');
    res.end();
});

app.use('/api/v1/tasks',tasks);


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`This server is running with ${port}.......`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();