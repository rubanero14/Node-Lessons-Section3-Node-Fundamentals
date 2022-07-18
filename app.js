const http = require('http');



const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
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
    res.end('Hi');
});

server.listen(3000);