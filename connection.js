// yeah maybe i should put it in other file
const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open", () => {
    console.log("We are connected");

    ws.send("Hey, How's it going?");
});

ws.addEventListener("message", ({data}) => {
    console.log(data);
});