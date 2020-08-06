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
                var table = document.createElement("table");
                table.setAttribute("id", "MainTable");
                //process csv removing \n
                var rows = e.target.result.split("\n");

                //create the table cell
                for (var i = 0; i < rows.length; i++) {
                    //split list by , then insert it to cell
                    var cells = rows[i].split(",");
                    //more than 1 coloum
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        for (var j = 0; j < cells.length; j++) {
                            var cell = row.insertCell(-1);
                            //populate the cell
                            cell.innerHTML = cells[j];
                        }
                    }
                }
                // find element with dvcsv
                var dvCSV = document.getElementById("dvCSV");
                // change the content of html/ basically reset the table that has been inserted
                dvCSV.innerHTML = "";
                // insert table inside that element
                dvCSV.appendChild(table);
                
                GetCellValues();

                //first try to coloring it
                // var tableID = document.getElementById('MainTable');
                // var tbody = tableID.getElementsByTagName('tbody')[0];
                // var cells = tbody.getElementsByTagName('td');

                // for (var i=0, len=cells.length; i<len; i++){
                //     if (parseInt(cells[i].innerHTML,10) > 5){
                //         cells[i].className = 'red';
                //     }
                //     else if (parseInt(cells[i].innerHTML,10) < -5){
                //         cells[i].className = 'green';
                //     }
                // }


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


//getting top cell value for coloring
function GetCellValues() {
    var table = document.getElementById('MainTable');
    var r = 0;
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            //value to return
            if (table.rows[r].cells[c].innerHTML == "On/Off"){
                alert(table.rows[r].cells[c].innerHTML)
                return(c);
            }
        
    }
}