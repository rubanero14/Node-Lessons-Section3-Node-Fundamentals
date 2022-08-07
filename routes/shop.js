// this core module path is needed to sending html template to frontend modularly 
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware!');
    // res.setHeader('Content-Type', 'text/html');
    // res.send(`<h1>Hello from Express JS</h1>`);

    /* 
        path.join will be passed 3 params, 
        i.e.: (file directory, up and level(if file in different sibling folder),
        folder, filename), where the the path will be result of concatenation of these params.
        File Directory or __dirname param will point to the parent folder directory of the file its being used from,
        means that if the filename is in different folder than its being called from, needed 4 params and the second param will be
        up one level syntax, where it gives an absolute path 
    */
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;