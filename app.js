const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

// EJS Template Engine Section
/*
    Telling Express JS to use EJS as templating engine
*/
app.set('view engine','ejs');

// Handlebars Template Engine Section
// For Handlebar templating engine, we have to manually install and import into project as its not built-in unlike the Pug engine
// const expressHandlebars = require('express-handlebars');
/* 
    Telling express to use handlebar engine and pass any identifier name of choice into .engine() arguement & 
    registered package name as 2nd arguement as function to initialize the engine as below. The indentifier name given will
    be used as file extension such as shop.hbs or shop.{identifier-name} you had given here, its dynamic!
*/
/* This app.engine('hbs', ...) is applicable for all handlebars files extension except the main layout file */
// app.engine('hbs', expressHandlebars({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     /* This code below is applicable for main layout handlebars file extension excluding all handlebars files */
//     extname: 'hbs',
// }));
//  Telling Express JS to use handlebars as templating engine
// app.set('view engine', 'hbs');

// Pug Template Engine Section
/*
    Telling Express JS to use pug as templating engine
    More of the app.set() use can be found in the documentation below:
    http://expressjs.com/en/5x/api.html#app.set
*/
// app.set('view engine', 'pug');

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
    Basically, granting read access to the browser on the folder name passed in as the arguement below
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
        path: undefined,
    });
});

// Listen to server short-hand
app.listen(PORT);
console.log(`Server online at http://localhost:${PORT}`);