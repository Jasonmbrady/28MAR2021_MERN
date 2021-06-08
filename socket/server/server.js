const express = require('express');
const app = express();


const server = app.listen(8000, ()=> console.log("Express active on port 8000"));

const io = require('socket.io')(server, {cors: true})
io.on("connection", socket => {
    console.log(socket.id);
    socket.on("client_message", data => {
        console.log(data);
        io.emit("new_message", data);
    })
    io.emit("Welcome", "Hi there!")
});