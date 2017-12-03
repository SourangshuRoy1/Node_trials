var http = require('http');
//var express = require('express');
var server = http.createServer(function(request,response){
    
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello world\n");
});

server.listen(8000);
console.log("done");