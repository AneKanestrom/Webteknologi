let myInput = document.getElementById('myInput')

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue == '') {
        alert("Remember to write something");
    } 
    
    else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

}