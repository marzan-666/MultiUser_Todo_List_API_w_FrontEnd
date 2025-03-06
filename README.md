# Multi-User To-Do List API

## Overview

This project is a **Multi-User To-Do List API** built using **Django REST Framework** and **PostgreSQL**. It allows users to **create, manage, and assign tasks** while implementing **JWT authentication** for secure access. Users can organize tasks with **priority levels and deadlines** and mark them as completed.

## Features

- **User Authentication**: Signup, Login, and JWT-based authentication.
- **Task Management**:
  - Create, Read, Update, and Delete (CRUD) tasks.
  - Assign tasks to different users.
  - Set priority levels (**High, Medium, Low**).
  - Set task deadlines.
  - Mark tasks as completed.
  - Filter tasks by **status and priority**.

## Tech Stack

- **Backend**: Django REST Framework (DRF)
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Python (>=3.8)
- PostgreSQL
- pip & virtualenv

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. **Create a virtual environment and activate it:**

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**

   - Create a `.env` file in the project root.
   - Add database credentials and JWT secret key:
     ```sh
     SECRET_KEY=your_secret_key
     DATABASE_NAME=your_db_name
     DATABASE_USER=your_db_user
     DATABASE_PASSWORD=your_db_password
     DATABASE_HOST=localhost
     DATABASE_PORT=5432
     ```

5. **Apply database migrations:**

   ```sh
   python manage.py migrate
   ```

6. **Create a superuser (optional for admin access):**

   ```sh
   python manage.py createsuperuser
   ```

7. **Run the development server:**

   ```sh
   python manage.py runserver
   ```

## API Endpoints

### Authentication

- **POST** `/api/auth/signup/` - Register a new user
- **POST** `/api/auth/login/` - Login and get JWT token

### Tasks

- **GET** `/api/tasks/` - Get all tasks
- **POST** `/api/tasks/` - Create a new task
- **GET** `/api/tasks/{id}/` - Get a single task
- **PUT** `/api/tasks/{id}/` - Update a task
- **DELETE** `/api/tasks/{id}/` - Delete a task
- **PATCH** `/api/tasks/{id}/complete/` - Mark a task as completed
- **GET** `/api/tasks/?status=completed` - Filter tasks by status
- **GET** `/api/tasks/?priority=high` - Filter tasks by priority

## License

This project is licensed under the MIT License.

## Contributing

Feel free to open issues and submit pull requests for improvements.

## Contact

For any questions or support, contact [marzan666@gmail.com](mailto\:your-email@example.com).

