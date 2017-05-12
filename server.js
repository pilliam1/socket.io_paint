var express = require('express');
var app = express();

var server = app.listen(3000);
app.use(express.static('public'));

console.log("hello fellas");

socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

//taking in a socket because that is what becomes of it when a newConnection is made.
function newConnection(socket){
    console.log('new connection: ' + socket.id);

    socket.on('mouse', mouseMsg);

//recieves messages and sends them back out immediately
    function mouseMsg(data){
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}