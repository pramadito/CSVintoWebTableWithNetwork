
// TODO WS ONLY USED FOR DEVELOPMENT. CHANGE TO WSS FOR PRODUCTION
const WebSocket = require("ws");

const wss = new WebSocket.Server({port:8082});

wss.on("connection", ws =>{
    console.log("New client connected!");

    //sending data to console
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);

        ws.send(data.toUpperCase());
    })


    //check when the client lost connection from the server
    
    ws.on("close", () =>{
        console.log("Client has disconnected!");
    });
});