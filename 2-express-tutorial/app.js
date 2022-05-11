const express = require('express');
const app = express();

// req => middleware => res
const logger = require('./logger');
const authorize = require('./authorize')
// nghĩa là thằng nào trên đường link url của nó tồn tại thằng nào tên là url thì nó mới áp dụng cái hàm logger kia vào đó mà.
// đéo thể tin được 
app.use('/api',[logger,authorize]);

app.get('/', (req, res) => {
    res.send('home');
});
app.get('/about', (req, res) => {
    res.send('About');
});
app.get('/api/products', (req, res) => {
    res.send('Products');
});
app.get('/api/items', (req, res) => {
    res.send('items');
});
app.listen(1234, () => {
    console.log('server is running');
});