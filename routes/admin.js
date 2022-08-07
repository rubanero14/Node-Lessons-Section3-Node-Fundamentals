// Core module for filepath creation
const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // console.log('add product middleware!');
    // res.setHeader('Content-Type', 'text/html');

    // /admin needs to be added into action since we have named and filtered the path in app.js
    // res.send(`
    //     <form action="/admin/add-product" method="POST">
    //         <input name="title" type="text"/>
    //         <input type="submit" value="Add Product"/>
    //     </form>
    // `);

    /* 
        path.join will be passed 3 params, 
        i.e.: (file directory, up and level(if file in different sibling folder),
        folder, filename), where the the path will be result of concatenation of these params.
        File Directory or __dirname param will point to the parent folder directory of the file its being used from,
        means that if the filename is in different folder than its being called from, needed 4 params and the second param will be
        up one level syntax, where it gives an absolute path 
    */
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;