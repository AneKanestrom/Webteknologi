let myInput = document.getElementById('myInput')
let myOutput = document.getElementById('myOutput')

function addTask() {
    
    let newItem = document.createElement("li");
    newItem.innerHTML = myInput.value
    myOutput.appendChild(newItem);

}