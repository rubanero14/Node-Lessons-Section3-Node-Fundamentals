const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

// Initiate and use middlewares here
app.use(bodyParser.urlencoded({extended: true}));

// using outsourced routes from admin.js/shop.js into app.js
app.use(adminRoutes);
app.use(shopRouter);

// middleware for catching all routes not registered/used and display error 404 message to browser
app.use((req,res,next) => {
    res.status(404).send(`<h1>Error 404 : Page not found!</h1>`);
});

// Listen to server short-hand
app.listen(PORT);
console.log(`Server online at http://localhost:${PORT}`)