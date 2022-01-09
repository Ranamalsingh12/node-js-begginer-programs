const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    const stream = fs.createReadStream('test.json');
    stream.pipe(res)
})

server.listen(3000,()=>{console.log("Application started to 3000");})