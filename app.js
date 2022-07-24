const http = require('http');

// importing the custom module created in routes.js
const routes = require('./routes'); // .js is automatically appended by Node into filepath


// Now just pass the imported route function into createServer(routes) as an arguement and omit the parentheses if single function
// is exported
// for more than one item exported, we can access the function using key/value pairing as below
console.log(routes.someText);
const server = http.createServer(routes.handler);

// Listen to server
server.listen(8000);