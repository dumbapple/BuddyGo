const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(8000, () => {
    console.log('Listening for requests on port 8000!!!');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

// socket is unique between particular client and the server
io.on('connection', (socket) => { // runs callback on connection
    console.log('Made socket connection!', socket.id);
});