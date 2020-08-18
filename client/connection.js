// yeah maybe i should put it in other file
const ws = new WebSocket("ws://localhost:8082");

//
ws.addEventListener("open", () => {
    console.log("We are connected");
});


//for recieving data from server in real time
/* ws.addEventListener("message", ({file}) => {
    console.log(file);
}); */

exampleSocket.onmessage = function (event) {
    console.log(event.data);
}


//make the event refresh add the document
var reader = new FileReader();
reader.onload = function (e) {
    var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        console.log("button checked");

    } else {
        // Checkbox is not checked..
        console.log("button unchecked");
    }
});}


ws.binaryType = 'arraybuffer';
  ws.onmessage = function(e) {
      console.log(e.data.byteLength); // ArrayBuffer object if binary
  }