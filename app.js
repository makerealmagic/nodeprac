const http = require('http');
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.setHeader('content-type', 'text/html')
        res.write(`<html>
        <head>
        <title>Form</title>
        </head>
        <body>
        <form action="/message" enctype="multipart/form-data" method="POST">
        <input type="text" name="uname"><input type="submit" name="submit" value="send">
        </form>
        </body>
        </html>`);
        return res.end();
    }
    if (url === "/message" && method == "POST") {
        res.setHeader('location', '/')
        res.statusCode = 302;
    }
        res.setHeader('content-type', 'text/html')
        res.write(`<html>
        <head>
        <title>Form</title>
        </head>
        <body>
        <h2>Racky...</h2>
        </body>
        </html>`);
        res.end();
})
server.listen(3000)