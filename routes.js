const fs = require('fs');
// console.log(req.url, req.method, req.headers);
// process.exit();

// Connector function to listen incoming request from app.js to routes.js
const requestHandler = (req, res) => {
    const URL = req.url;
    const Method = req.method;

    if (URL === '/') {
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                    <body>
                        <form action="/message" method="POST">
                            <input type="text" name="message"/>
                            <button type="submit">Send</button>
                        </form>
                    </body>
                </head>
            </html>
        `);
        return res.end();
    }

    if (URL === '/message' && Method === 'POST') {
        // Data from input is parsed and assigned to Body
        const Body = [];

        // Event Listener on data began incoming and parsing
        req.on('data', (chunk) => {
            console.log(chunk);
            Body.push(chunk);
        });

        // Event Listener on data finished parsing
        return req.on('end', () => {
            const ParsedBody = Buffer.concat(Body).toString();
            const Message = ParsedBody.split('=')[1];
            console.log(ParsedBody);
            console.log(Message);
            fs.writeFile('message.txt', Message, err => {
                // 302 is redirect HTTP status code
                res.statusCode = 302;
                // Header with Location redirects to the set path
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>My SSR Page</title>
                <body>
                    <h1>Hello Node!</h1>
                </body>
            </head>
        </html>
    `);
    return res.end();
};

// 3 ways of exporting this file to be imported into app.js or anywhere within project
// first method is using modules.export for single function
// module.exports = requestHandler; // storing this function into export module

// second method is using modules.export for more functions/variables, using key value pairing
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard-coded text'
// };

// third method is using modules.export for more functions/variables, using key value pairing but more targetted export
// like key name is appended to module.exports.someKey to assign functions/variables separately as below
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard-coded text';

// also the third method can be further simplified by removing the module in module.exports declaration and this shortcut
// is supported by Node
exports.handler = requestHandler;
exports.someText = 'Some hard-coded text';
