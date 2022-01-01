// import WebSocket from 'ws'; // for reactJS
const WebSocket = require('ws'); // for regular usage

const ws = new WebSocket('ws://localhost:3000'); // connecting ws to the server

ws.on('open', function open() { // initial function open connection to server
  ws.send('WS Connected, this is message from client'); // client sent message to server
});

ws.on('message', function message(data) { //  initial function to receive data msg from server
  console.log('received: %s', data); // print data msg received from server
});
