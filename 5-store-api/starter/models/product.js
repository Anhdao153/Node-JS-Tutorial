const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"không được bỏ trống"]
    },
    price: {
        type: Number,
        required: [true,"không được bỏ trống"]
    },
    featured: {
        type: String,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values: ['ikea','liddy','caressa','marcos'],
            message: 'this {VALUES} is not supported'
        } 
    }
});

module.exports = mongoose.model('products', productSchema);