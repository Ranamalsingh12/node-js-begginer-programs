// Routing 

// Performing task on a particular path is called routing 

const http = require("http");

const routes = {
    '/' : function index(request, response){
        response.writeHead(200);
        response.end("Node Routing");
    },
    '/about' : function about(request, response){
    response.end("you are in the about page");
}
}

// function index(request, response){
//     response.writeHead(200);
//     response.end("Node Routing");
// }

// function about(request, response){
//     response.end("you are in the about page");
// }

http.createServer(function(req, res){
    if(req.url in routes){
        return routes[req.url](req,res);
    }
    // if(req.url=='/about'){
    //     return about(req,res);
    // }
}).listen(8000);