var http = require('http');

var mongo = require('mongodb');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, worldd!');
    
}).listen(process.env.PORT || 8080);


