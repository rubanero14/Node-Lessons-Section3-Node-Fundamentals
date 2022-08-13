const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

/*
    Telling Express JS to use pug as templating engine
    More of the app.set() use can be found in the documentation below:
    http://expressjs.com/en/5x/api.html#app.set
*/
app.set('view engine', 'pug');

/* 
    Telling Express to find and use HTML templates inside the views folder, in the case of the templates stored in different
    folder name, change the second arguement passed in the app.set() as the name of the folder:
    e.g.: app.set('views','templates') if the templates stored inside 'templates' folder 
*/
app.set('views','views');

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
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        docTitle: '404: Page Not Found',
    });
});

// Listen to server short-hand
app.listen(PORT);
console.log(`Server online at http://localhost:${PORT}`);