const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
require('dotenv').config();
let port = process.env.PORT||5000;
server.listen (port,()=>{
    console.log('Servidor escuchando en el puerto: '+port)
});

io.on('connection', (socket)=>{

socket.on('disconnect', ()=>{
    io.emit('user-changed', {user: socket.username,event:'left'});

});

socket.on('set-name',(name)=>{
    socket.username= name;
    io.emit('user-changed',{user:name,event: 'joined'});
});

socket.on('send-message',(message )=>{
   io.emit('message',{msg: message.text,user:socket.username,createdAt: new Date()});
});





});