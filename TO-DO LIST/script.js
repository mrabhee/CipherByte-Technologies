// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    
    li.innerHTML = '<span class="task-text">' + taskText + '</span><button onclick="removeTask(this)">Delete</button>';
    
    ul.appendChild(li);
    
    input.value = "";
}

// Function to remove a task
function removeTask(taskElement) {
    var li = taskElement.parentElement;
    li.remove();
}
