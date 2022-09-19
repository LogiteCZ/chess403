function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '5';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 1; i < 9; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 1; j < 9; j++) {
        var td = document.createElement('TD');
        td.width = '60';
        td.height = '60';
        if (i%2 == j%2) {
            td.appendChild(document.createTextNode("White"))
        } else {
            td.appendChild(document.createTextNode("Black"))
        }
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();