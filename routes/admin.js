const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // console.log('add product middleware!');
    // res.setHeader('Content-Type', 'text/html');
    res.send(`
        <form action="/product" method="POST">
            <input name="title" type="text"/>
            <input type="submit" value="Add Product"/>
        </form>
    `);
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;