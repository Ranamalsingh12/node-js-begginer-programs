const http = require('http')

const host = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'})
    //this method is used to make statuscode and sethead in single line
    // res.statusCode = 200;
    // res.setHeader('Content-type','text/plain');
    res.end("Welcome to my HTTP server");
})
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})