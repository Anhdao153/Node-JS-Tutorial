const express = require('express');
const app = express();
const morgan = require('morgan');
// req => middleware => res
const logger = require('./logger');
const authorize = require('./authorize');
// nghĩa là thằng nào trên đường link url của nó tồn tại thằng nào tên là url thì nó mới áp dụng cái hàm logger kia vào đó mà.
// đéo thể tin được 

// app.use(express.static('./public'));

app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send('home');
});
app.get('/about', (req, res) => {
    res.send('About');
});
app.get('/api/products', (req, res) => {
    console.log(req.query);
    res.send('Products');
});
app.get('/api/items', (req, res) => {
    console.log(req.query);
    res.send('items');
});
app.listen(1234, () => {
    console.log('server is running');
});