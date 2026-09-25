function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  let li = document.createElement("li");

  // Create task text
  let span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  // Create delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.onclick = function () {
    li.remove();
  };

  // Add elements to the list item
  li.appendChild(span);
  li.appendChild(deleteButton);

  // Add list item to the task list
  document.getElementById("taskList").appendChild(li);

  // Clear input
  taskInput.value = "";
}
