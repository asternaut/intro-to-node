var express = require('express');
var app = express();

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
