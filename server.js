var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

//var mypath = 'getsongs.py';

var PythonShell = require('python-shell');
//var pyshell = new PythonShell(mypath);
var birds = require('./birds.js');


users=[];
connections = [];

server.listen(3000);
console.log("Server running");

app.use(express.static('front'));

app.use('/', birds);

io.sockets.on('connection',function(socket,err){
  connections.push(socket);
  console.log('connection: %s sockets', connections.length);

  socket.on('disconnect',function(data){
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets', connections.length);
  });

  socket.on('send message',function(data){
    console.log(data);
   /* var options ={
      mode:'text',
      args:[data]
    };
    PythonShell.run(mypath,options, function(err,results){
      if(err) throw err;
      console.log(options.args);
      console.log(results.shape);
      io.sockets.emit('reply message',{msg:results});
    })*/

    io.sockets.emit('new message',{msg:data});

  });

});
