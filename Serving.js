const http = require('http');
const fs = require('fs');
const config = {
    port: 3000,
    host: '0.0.0.0'
}


const server = http.createServer((req, res)=>{
    fs.readFile('content.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
})

server.listen(config.port, config.host, () => {
    console.log("Listening on port 3000");
})