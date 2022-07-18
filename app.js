const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const URL = req.url;
    const Method = req.method;

    if(URL === '/'){
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

    if(URL === '/message' && Method === 'POST'){
        const Body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            Body.push(chunk);
        });
        return req.on('end', () => {
            const ParsedBody = Buffer.concat(Body).toString();
            const Message = ParsedBody.split('=')[1];
            console.log(ParsedBody);
            console.log(Message);
            fs.writeFileSync('message.txt', Message);
            // 302 is redirect HTTP status code
            res.statusCode = 302;
            // Header with Location redirects to the set path
            res.setHeader('Location', '/');
            return res.end();
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
});

server.listen(3000);