var PORT = process.env.PORT || 3000; 
var express = require('express') ; 
var app = express(); 
//this tells node to use express app as boilerplate
var http = require('http').Server(app); 
//call this dir with http var
var io = require('socket.io')(http); 

app.use(express.static(__dirname + '/public')); 

io.on('connection', function(){
  console.log("User connected via socket.io"); 
});

http.listen(PORT, function(){
  console.log("Server started"); 
});



