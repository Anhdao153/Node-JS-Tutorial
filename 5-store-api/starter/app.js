const express = require('express');
require('dotenv').config();
require('express-async-errors');
const notFoundErrors = require('./middleware/not-found');
const serverError = require('./middleware/errors-handler');
const connectDB = require('./db/connect');
const productRoutes = require('./routes/products');
// async error
const app = express();

// app.use(express.json());
app.get('/',(req,res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">products routes</a>`);
});
app.use('/api/v1/products',productRoutes);

app.use(notFoundErrors);
app.use(serverError);


const PORT = process.env.PORT;
const UrlDB= process.env.MONGOOSE_URL;
const start = async () => {
    try {
        await connectDB(UrlDB);
        app.listen(PORT,()=>{
            console.log(`the server is listening on ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};


start();