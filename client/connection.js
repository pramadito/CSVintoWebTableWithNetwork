// yeah maybe i should put it in other file
const ws = new WebSocket("ws://localhost:8082");


ws.addEventListener("open", () => {
    console.log("We are connected");
});

ws.addEventListener("message", ({data}) => {
    console.log(data);
});

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