let myInput = document.getElementById('myInput')
let myOutput = document.getElementById('myOutput')

let tasks = [];

function addTask() {
    if(myInput.value === ''){
        alert("you must write something!");
    }  
    
    else {

    let taskText = myInput.value;
    let timestamp = new Date().getTime();

    let taskObject = {
        text: taskText,
        timestamp: timestamp
    };

    tasks.push(taskObject);

    myOutput.innerHTML += "<li><input type='checkbox'> " + taskText + "</li>";

    myInput.value = "";
    }
}

