document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");


    // This function adds task
    function addTask() {
        taskText = taskInput.value.trim();
        if (taskText === ""){
            alert("Please enter your task");
        }
        else {
            const li = document.createElement("li");
            li.textContent = taskText;
            // This button removes task
            const Rbtn = document.createElement("button");
            Rbtn.textContent = "Remove";
            Rbtn.className = 'remove-btn';
            Rbtn.onclick = function () {
                li.remove();
            }
            li.appendChild(Rbtn);
            taskList.appendChild(li)
            taskInput.value = "";
        }
    }
    // The add task button call the add task function
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    })
    document.addEventListener("DOMContentLoaded", addTask);
})