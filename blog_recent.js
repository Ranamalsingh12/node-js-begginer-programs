const http = require('http');
const fs = require('fs');
// http.createServer((req, res) => {
//     if(req.url == '/'){
//         fs.readFile('./title.json',(err, data) => {
//             if(err){
//                 console.error(err);
//                 res.end('Server Error');
//             }
//             else{
//                 const titles = JSON.parse(data.toString())
//                 fs.readFile('./template.html', (err, data) => {
//                     if(err){
//                         console.log(err);
//                         res.end('Server Error');
//                     }
//                     else{
//                         const tmpl = data.toString();
//                         const html = tmpl.replace('%', titles.join('</li><li>'));
//                         res.writeHead(200, {'Content-Type': 'text/html'});
//                         res.end(html);
//                     }
//                 })
//             }
//         })
//     }
// }).listen(8000,'127.0.0.1');

//By using intermediately functions

http.createServer((req, res) => {
    getTitles(res);
}).listen(8000, '127.0.0.1');

function getTitles(res){
    fs.readFile('./titles.json', (err, data) => {
        if(err){
            hadError(err, res);
        }
        else{
            getTemplate(JSON.parse(data.toString()), res)
        }
    })
}

function getTemplate(titles, res){
    fs.readFile('./template.html',(err, data) => {
        if(err){
            hadError(err, res);
        }
        else{
            formatHtml(titles, data.toString(), res);
        }
    });
}

function formatHtml(titles, tmpl, res){
    // const tmpl = data.toString();
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

function hadError(err, res){
    console.log(err);
    res.end('Server Error');
}