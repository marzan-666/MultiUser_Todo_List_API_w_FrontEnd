async function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("taskDeadline").value;
    const priority = document.getElementById("taskPriority").value;
    const isCompleted = document.getElementById("taskCompleted").checked;

    if (!title || !description || !deadline || !priority) {
        alert("Please fill out all fields.");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                deadline: deadline,
                priority: priority,
                is_completed: isCompleted
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert("Task added successfully!");
        loadTasks();  // Reload tasks after adding a new one
    } catch (error) {
        console.error("Error adding task:", error);
        alert("Failed to add task. Please try again.");
    }
}

async function loadTasks() {
    const token = localStorage.getItem("access");

    try {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const tasks = await response.json();
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clear existing tasks

        tasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = `${task.title} - ${task.description}`;
            taskList.appendChild(taskItem);
        });

    } catch (error) {
        console.error("Error loading tasks:", error);
        alert("Failed to load tasks. Please try again.");
    }
}

// Run when `todo.html` is loaded
document.addEventListener("DOMContentLoaded", loadTasks);
