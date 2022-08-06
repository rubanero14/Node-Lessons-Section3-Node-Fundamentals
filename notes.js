// const http = require('http');

// Basic middleware example
// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // This allow the request to continue to the next middleware in line
// });
// app.use('/', (req, res, next) => {
//     // console.log('This always runs!')
//     next();
// });

// importing the custom module created in routes.js
// const routes = require('./routes'); // .js is automatically appended by Node into filepath

// Now just pass the imported route function into createServer(routes) as an arguement and omit the parentheses if single function
// is exported
// for more than one item exported, we can access the function using key/value pairing as below
// console.log(routes.someText);

// Listen to server
// const server = http.createServer(app);
// server.listen(PORT);

