let myInput = document.getElementById('myInput')
let myOutput = document.getElementById('myOutput')

function addTask() {
    
    myOutput.innerHTML += "<li><input type='checkbox'> "+ myInput.value +"</li>"


}