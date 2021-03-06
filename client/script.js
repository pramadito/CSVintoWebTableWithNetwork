
function CSVUpload(){
    Upload();
    UploadToServerCSV();
}



// creating table from CSV To Excel and add buttons too
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    //check file if it's valid name and data type
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // (anyname)+ .csv or .txt
    if (regex.test(fileUpload.value.toLowerCase())) {
        //check if html5 browser
        if (typeof (FileReader) != "undefined") {
            //load file
            var reader = new FileReader();
            //load table (function (e) is function event happen)
            reader.onload = function (e) {
                //creating table
                
                var table = document.createElement("table");
                table.setAttribute("id", "MainTable");
                //process csv removing \n
                var rows = e.target.result.split("\n");
                var tr = document.createElement('tr');
                var Cell_id = 0;

                //create the table cell
                for (var i = 0; i < rows.length; i++) {
                    //split list by , then insert it to cell
                    var cells = rows[i].split(",");
                    //more than 1 column
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        
                        for (var j = 0; j < cells.length; j++) {
                            var cell = row.insertCell(-1);
                            //populate the cell
                            cell.innerHTML = cells[j];

                            //creating checkbox each
                            var cell = row.insertCell(-1);
                            
                            if (i > 0) {
                                //creating checkbox after title
                                var checkbox = document.createElement('input');
                                checkbox.type = "checkbox";

                                // give uniqueid 
                                checkbox.id = "checkboxid" + Cell_id; 
                                cell.appendChild(checkbox);
                                Cell_id++;                        
                            }
                            else{                           
                                cell.innerHTML = "On/Off";
                            }   
                        }                    
                    }
                }
                // find element with dvcsv
                var dvCSV = document.getElementById("dvCSV");
                // change the content of html/ basically reset the table that has been inserted
                dvCSV.innerHTML = "";
                // insert table inside that element
                dvCSV.appendChild(table);
  
            //end reader on load           
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}


// TODO and FIXME : i should use json parsing maybe? this one is just input all the file into server 
function UploadToServerCSV(){
    var file = document.querySelector('input[type="file"]').files[0];
    ws.send(file); // yes this one
    console.log("Sending data to server..");
}


function OnLoadCSVTable(){
    var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        console.log("button checked");

    } else {
        // Checkbox is not checked..
        console.log("button unchecked");
    }
});
}
