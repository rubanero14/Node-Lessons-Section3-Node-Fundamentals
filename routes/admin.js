const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // console.log('add product middleware!');
    // res.setHeader('Content-Type', 'text/html');

    // /admin needs to be added into action since we have named and filtered the path in app.js
    res.send(`
        <form action="/admin/add-product" method="POST">
            <input name="title" type="text"/>
            <input type="submit" value="Add Product"/>
        </form>
    `);
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;