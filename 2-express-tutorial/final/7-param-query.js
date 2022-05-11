const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Dữ liệu ở đây</h1><a href="/api/data">bấm vào đây</a>');
});
app.get('/api/data', (req, res) => {
    const data = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.send(data);
});
app.get('/api/data/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const data = products.find((product) => product.id === Number(productID));
    if (!data) {
        return res.sendStatus(404);
    }
    return res.json(data);
});


app.get('/api/products/:id/review/:view', (req, res) => {
    console.log(req.params);
    res.send('Hello world');
});

app.get('/api/v1/product/query', (req, res) => {
    console.log(req.query);
    res.send('Hello world 2');
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let pageable = [...products];

    if (search) {
        pageable = pageable.filter((product) => {
            return product.name.match(search);
        });
    }
    if (limit) {
        pageable = pageable.slice(0, Number(limit));
    }
    if (pageable.length < 1) {
        // res.status(200).send('there is not product');
        return res.status(200).json({success: true, data: null});

    }
    res.status(200).json(pageable);
});


app.listen(1234, () => {
    console.log('server is running');
});