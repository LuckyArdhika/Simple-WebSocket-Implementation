const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 3000 }) // create listening port for ws server
 
wss.on('connection', ws => { // initial function to (on connect)
  ws.on('message', message => { // initial function to received message from client
    console.log(`Received message => ${message}`) // print received msg from client
  })
  ws.send('Hello! Message From Server!!'); // sent msg to client
  ws.send('This is websocket from server'); // sent msg to client
})
