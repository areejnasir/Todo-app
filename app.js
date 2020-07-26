var table = document.getElementById("table");



 function add(){
     var input_first = document.getElementById("input_first");
     var text = document.createTextNode(input_first.value);

     var tr = document.createElement("tr");
     tr.setAttribute("class" , "row")
     var td = document.createElement("td");
     td.setAttribute("class" , "td1")
     td.appendChild(text);
     tr.appendChild(td);
     table.appendChild(tr);
     input_first.value = ""


    var td2 = document.createElement("td");
    td2.setAttribute("class" , "td2");
    var delete_button = document.createElement("button");
    var text2 = document.createTextNode("Delete");
    // delete_button.appendChild(delete_button)
    delete_button.appendChild(text2);
    td2.appendChild(delete_button);
    delete_button.setAttribute("onclick" , "remove(this)");
    delete_button.setAttribute("class" , "delete");

    tr.appendChild(td2);


    var td3 = document.createElement("td");
    td3.setAttribute("class" , "td3");
    var edit_button = document.createElement("button");
    var edit = document.createTextNode("Edit");
    edit_button.appendChild(edit);
    td3.appendChild(edit_button)
    edit_button.setAttribute("onclick" , "edit(this)");
    edit_button.setAttribute("class" , "edit");

    tr.appendChild(td3)


 }

 function remove(e){
    e.parentNode.parentNode.remove();
 }

 function edit(e){
    var a = e.parentNode.parentNode.firstChild.firstChild.nodeValue;
    var val = prompt("Enter updated value", e.parentNode.parentNode.firstChild.firstChild.nodeValue);

    e.parentNode.parentNode.firstChild.firstChild.nodeValue = val;
 }