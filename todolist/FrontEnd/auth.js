
// Show Register Form
function showRegister() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
}

// Show Login Form
function showLogin() {
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}

// User Registration
async function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    const response = await fetch(`${API_BASE}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert("Registration successful. Please login.");
        showLogin();
    } else {
        alert("Error registering. Try again.");
    }
}

// User Login

/*async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${API_BASE}/token/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        alert("Login successful!");
    } catch (error) {
        console.error("Login failed!", error);
        alert("Login failed! Check console.");
    }
}
*/
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Login successful!", data);

        // Store tokens
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        // ✅ Redirect to To-Do List page
        window.location.href = "todo.html"; // Change this if your to-do list page has a different name

    } catch (error) {
        console.error("Login failed!", error);
        alert("Login failed! Please check your credentials.");
    }
}



// User Logout
function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    document.getElementById("todo-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}
