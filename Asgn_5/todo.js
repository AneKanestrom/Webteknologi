let myInput = document.getElementById('myInput');
let myOutput = document.getElementById('myOutput');
let completionStatus = document.getElementById('completionStatus');

let tasks = 0;
let completedTasks = 0;

function addTask() {
  if (myInput.value.trim() === '') {
    alert("You must write something!");
    return;
  }

  let taskText = myInput.value;

  // Create a new list item
  let liElement = document.createElement("li");

  // Create a checkbox
  let checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      completedTasks++;
      liElement.setAttribute('data-completed', 'true');
    } else {
      completedTasks--;
      liElement.setAttribute('data-completed', 'false');
    }
    updateCompletionStatus();
  });

  // Append the checkbox to the list item
  liElement.appendChild(checkbox);

  // Create a span for the task text
  let spanElement = document.createElement("span");
  spanElement.textContent = taskText;

  // Append the span to the list item
  liElement.appendChild(spanElement);

  // Append the list item to the list
  myOutput.appendChild(liElement);

  // Increment the total number of tasks
  tasks++;

  // Update completion status
  updateCompletionStatus();

  // Clear the input field
  myInput.value = "";
}

function updateCompletionStatus() {
  completionStatus.textContent = `${completedTasks}/${tasks} completed`;

  // Loop through each list item to apply text-decoration
  let listItems = myOutput.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    let isCompleted = listItem.getAttribute('data-completed') === 'true';
    listItem.style.textDecoration = isCompleted ? 'line-through' : 'none';
  }
}


