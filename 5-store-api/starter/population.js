require('dotenv').config();

const connectDB = require('./db/connect');
const products = require('./models/product');
const data = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGOOSE_URL);
        await products.deleteMany();
        await products.create(data);
        console.log(`Server is now connected`);
        process.exit(0);
    } catch (error) {
        console.log(`Some things went wrong` + error.message);
        process.exit(1);
    }
};


start();