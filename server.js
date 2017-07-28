var http = require('http');


http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var mydata  = "hello world start, ";


    var url = "mongodb://localhost/mydb";
// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect(url);
// Create a schema
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);
    

// Create a todo in memory
var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    mydata = mydata + "saved";
});
   
    mydata = mydata  + "hello world end";

    res.end(mydata);
    
}).listen(process.env.PORT || 8080);






