var http = require('http');


http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, worldd!');
    
}).listen(process.env.PORT || 8080);

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/testdb';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('testdb').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 
