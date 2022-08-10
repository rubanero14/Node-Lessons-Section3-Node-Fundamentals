const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

// Initiate and use middlewares here
app.use(bodyParser.urlencoded({extended: true}));

/* 
    This middleware enables serving static files eg: main.css files to browser.
    Basically, granting read access to the browser on the folder we passed in as the arguement below
*/
app.use(express.static(path.join(__dirname, 'public')))

// using outsourced routes from admin.js/shop.js into app.js
app.use('/admin', adminRoutes.routes);
app.use(shopRouter);

// middleware for catching all routes not registered/used and display error 404 message to browser
app.use((req,res,next) => {
    // shorthand for http status code sending to client side
    // res.sendStatus(404);
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Listen to server short-hand
app.listen(PORT);
console.log(`Server online at http://localhost:${PORT}`);