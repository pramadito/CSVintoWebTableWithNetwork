
// TODO WS ONLY USED FOR DEVELOPMENT. CHANGE TO WSS FOR PRODUCTION


const WebSocket = require("ws");

const wss = new WebSocket.Server({port:8082});

wss.on("connection", ws =>{
    console.log("New client connected!");

    //broadcast all data except itself
   ws.on('message', function incoming(file) {
      console.log(`recieved the data: ${file}`);
      
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(file);
          console.log(`Sending Data to other client: ${file}`);
        }
      });
    });

    //check when the client lost connection from the server
    
    ws.on("close", () =>{
        console.log("Client has disconnected!");
    });
});