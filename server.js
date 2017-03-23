var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
//BP allows our client to submit data in JSON

app.get('/greeting', function(req, res){
  res.send("You found the greeting endpoint!");
});

app.get('/fail', function(req,res){
  res.send("ya done fucked up mate");
});

app.get('/yay', function(req,res){
  res.send("everything looks peachy here ya handsome doll");
})

//config server
var server = app.listen(3000, function(){

});

app.post('/login', function(req,res){
//body is the form fields
  var name = req.body.name;
  var password = req.body.password;
  var user = {name: name, password: password};
  res.json(user);
});
