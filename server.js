var http = require('http');


http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var mydata  = "hello world start, ";

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/mydb";


    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    mydata = mydata + "Database created!";
    db.close();
    });

    

    mydata = mydata  + "hello world end";

    res.end(mydata);
    
}).listen(process.env.PORT || 8080);






