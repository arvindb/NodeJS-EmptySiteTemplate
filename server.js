var http = require('http');


 var MongoClient = require('mongodb').MongoClient;
 var url = 'mongodb://localhost:27017/testdb';


http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var mydata  = "hello world start, ";

   
    MongoClient.connect(url, function(err, db) {

        var cursor = db.collection('testdb').find();

        cursor.each(function(err, doc) {

            mydata = mydata  + "connection opened, ";

        });
    }); 

mydata = mydata  + "hello world end";

    res.end(mydata);
    
}).listen(process.env.PORT || 8080);


