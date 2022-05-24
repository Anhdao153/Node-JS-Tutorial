//This is route file

const express = require('express');
const route = express.Router();

const {getAllProducts,getAllProductsStatic} = require('../controller/products');

route.route('/').get(getAllProducts);
route.route('/static').get(getAllProductsStatic);

module.exports = route;