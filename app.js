// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// Basic middleware example
// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // This allow the request to continue to the next middleware in line
// });
// app.use('/', (req, res, next) => {
//     // console.log('This always runs!')
//     next();
// });

app.use('/add-product', (req, res, next) => {
    // console.log('add product middleware!');
    // res.setHeader('Content-Type', 'text/html');
    res.send(`
        <form action="/product" method="POST">
            <input name="title" type="text"/>
            <input type="submit" value="Add Product"/>
        </form>
    `);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req, res, next) => {
    // console.log('In another middleware!');
    // res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>Hello from Express JS</h1>`);
});

// importing the custom module created in routes.js
// const routes = require('./routes'); // .js is automatically appended by Node into filepath

// Now just pass the imported route function into createServer(routes) as an arguement and omit the parentheses if single function
// is exported
// for more than one item exported, we can access the function using key/value pairing as below
// console.log(routes.someText);

// Listen to server
// const server = http.createServer(app);
// server.listen(PORT);


// Listen to server short-hand
app.listen(PORT);
console.log(`Server online at http://localhost:${PORT}`)