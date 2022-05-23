// import thư viện 
const express = require('express');
const tasks = require('./routes/tasks');
// import file database
const connectDB =require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware =require('./middleware/error-handler');
// import express module and port 
const app = express();
const port = process.env.PORT; 
// Hoặc có thể làm thế này 
// const port = process.env.PORT || 3000;
// khi nào chạy app thì dùng lệnh PORT=(luồng chạy) node app.js  


// middleware
app.use(express.json());
app.use(express.static('./public'));

// router
app.use('/api/v1/tasks',tasks); // luôn ở trên để ưu tiên chạy trước
app.use(notFound); // chỉ trong trường hợp not found mới xuống
app.use(errorHandlerMiddleware); // chỉ trong trường hợp error handler

// app.get('/',(req,res)=>{
//     res.writeHead(200, {"content-type": "text/html, application/json"});
// });




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