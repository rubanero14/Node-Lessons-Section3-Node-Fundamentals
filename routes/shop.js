const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware!');
    // res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>Hello from Express JS</h1>`);
});

module.exports = router;