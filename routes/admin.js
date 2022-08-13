// Core module for filepath creation
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Initiate global variable to store and pass data across middleware/routes
const products = [];

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

        Using utility function, we can further refactor the code above by combining __dirname & '..' using path.dirname, 
        the filename can be accessed by using 3 ways, 
        1. Directly accessing the file like this => res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
        2. Can be accessed by by manually constructing filename like this => const AddProductHTML = `${rootDir}/views/add-product.html`;
        3. Or using path.join method like below;
    */ 
    // create filepath using file name
    // const AddProductHTML = path.join(rootDir,'views','add-product.html');
    
    // // Inject HTML file to client
    // res.sendFile(AddProductHTML);
    res.render('add-product', {
        docTitle: 'Add Product',
    })
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({
        title: req.body.title,
    })
    res.redirect('/');
});

// Exporting this module to other files
// module.exports = router;
// exports.routes = router;
// exports.products = products;
module.exports = {
    routes: router,
    products: products,
}