var http = require('http');

http.createServer(function(request,response){
  response.end('hello, world');
  console.log("your server is running smoothly on port 3000");
}).listen(3000);
