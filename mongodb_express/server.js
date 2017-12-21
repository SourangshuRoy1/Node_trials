const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db;
/*MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, () => {
    console.log('listening on 3000');
});*/

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log(err);
    db = client.db('users');
    app.listen(3000, () => {
        console.log('Connected to MongoDB server at 27017 and node app is listening on 3000');
});

//app.get(path, callback); 
//path is the path of the GET request, wahtever coming after domain name.
//callback function tells the server about action to take when the path is matched,and takes in two arguments, a request object and a response object:

/*app.get('/', function(req, res) {
  res.send('Hello World')
})*/
app.use(bodyParser.urlencoded({extended: true}));  //Express allows us to add middlewares like body-parser to our application with the use method.
// middlewares are plugins that change the request or response object before they get handled by our application.
// Should place body-parser before CRUD handlers.
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
//Everything in the form field will be available within the req.body object
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // __dirname is a global object and gives the path to your current working directory, or where your current js file is.
  var collection = db.collection('quotes');
  collection.find().toArray(function(err, results) {
      console.log(results);

    // send HTML file populated with quotes here ... can use res.render if have templating
});
});

app.get('/afterSubmit', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.post('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').save(req.body, function(err, result){
      if(err) return console.log(err);
      console.log('Saved in quotes collection');
      res.redirect('/afterSubmit');
  });
});

/*
app.listen(3000, function() {
  console.log('listening on 3000');
});*/
});
