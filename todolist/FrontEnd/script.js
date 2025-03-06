const API_BASE = "http://127.0.0.1:8000/api";

// Fetch tasks from backend
async function fetchTasks() {
    const response = await fetch(`${API_BASE}/tasks/`, {
        headers: { "Authorization": "Bearer " + localStorage.getItem("access") }
    });

    const tasks = await response.json();
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task.title}
            <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>`;
        taskList.appendChild(li);
    });
}

// Add a new task
async function addTask() {
    const title = document.getElementById("new-task").value;

    const response = await fetch(`${API_BASE}/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
        body: JSON.stringify({ title })
    });

    if (response.ok) {
        fetchTasks();
        document.getElementById("new-task").value = "";
    } else {
        alert("Error adding task.");
    }
}

// Delete a task
async function deleteTask(taskId) {
    const response = await fetch(`${API_BASE}/tasks/${taskId}/`, {
        method: "DELETE",
        headers: { "Authorization": "Bearer " + localStorage.getItem("access") }
    });

    if (response.ok) {
        fetchTasks();
    } else {
        alert("Error deleting task.");
    }
}
