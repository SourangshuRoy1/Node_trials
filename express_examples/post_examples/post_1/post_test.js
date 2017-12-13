var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
});

/*app.post('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});*/

app.get('/contacts',function(req,res){
    res.sendFile(__dirname+"/contacts.html");
});

app.post('/login',function(req,res){
  var user_name=req.body.user1;
  var password=req.body.password1;
  console.log("User name : "+user_name+", password : "+password);
  //console.log(res);

  res.redirect(__dirname+"/contacts.html");
});
app.listen(3000,function(){
  console.log("Started Web app on PORT 3000");
})
