function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    //check file if it's valid name and data type
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; // (anyname)+ .csv or .txt
    if (regex.test(fileUpload.value.toLowerCase())) {
        //check if html5 browser
        if (typeof (FileReader) != "undefined") {
            //load file
            var reader = new FileReader();
            //load table (function (e) is fuction event happen)
            reader.onload = function (e) {
                //creating table
                var row_id = 1;
                var table = document.createElement("table");
                table.setAttribute("id", "MainTable");
                //process csv removing \n
                var rows = e.target.result.split("\n");
                var tr = document.createElement('tr');

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
                                checkbox.name = "name";
                                checkbox.value = "value";
                                // give uniqueid // TODO: give unique letter too
                                // TODO: Give color
                                checkbox.id = "checkboxid" + i; 
                                cell.appendChild(checkbox);
                                
                            }
                            else{                           
                                cell.innerHTML = "On/Off"
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


