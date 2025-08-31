# To-Do List Application

The **To-Do List Application** is a React-based application that allows users to manage tasks efficiently. Users can add, edit, delete, and mark tasks as completed or in progress. It features a responsive design with toast notifications for an enhanced user experience.

# Online application link is below

https://to-do-list-react-node-js-app-sigma.vercel.app/


---

## Preview

![To Do List React App](https://github.com/user-attachments/assets/96884184-3851-4159-b792-c4e84387cd3d)


## Features

* **Task Management:**

  * Add new tasks with a  deadline.
  * Edit task details.
  * Delete tasks.
* **Task Completion:**

  * Mark tasks as "Completed" or move them back to "In Progress."
  * Show completed tasks with completion timestamps.
* **User Notifications:**

  * Toast notifications for key actions like adding, editing, and deleting tasks.
* **Responsive Design:**

  * Clean and simple UI with Bootstrap styling.
  * Fully responsive for different screen sizes.

---



## Technologies Used

* **React:** Frontend library for building user interfaces.
* **React Toastify:** For toast notifications.
* **Bootstrap:** CSS framework for styling and layout.
* **UUID:** Library for generating unique IDs for tasks.

---

## Components Overview

### **App.jsx**

* Root component of the application.
* Includes the `ToastContainer` for notifications and renders the `Home` component.

### **Home.jsx**

* Manages the state of tasks and handles CRUD operations.
* Passes task data and handlers to the child components.

### **Header.jsx**

* Displays the title of the application.
* Includes a button to toggle the "Add Task" form.
* Shows the `AddTask` component when the toggle is active.

### **Button.jsx**

* Toggles the "Add Task" form.
* Displays notifications indicating the form's state (open/closed).

### **AddTask.jsx**

* Form to add new tasks.
* Validates input and sends new task data to the `Home` component.

### **TasksList.jsx**

* Displays tasks grouped into "In Progress" and "Completed" sections.
* Uses the `TaskCard` component to display individual tasks.

### **TaskCard.jsx**

* Displays task details, including task name, deadline, and completion status.
* Allows users to delete or edit tasks and toggle completion status.
* Highlights completed tasks with a timestamp.

### **EditModal.jsx**

* Modal for editing task details.
* Updates task name and deadline.

---


## How to Use

1. **Add a Task:**

   * Click the "Show - Add Task Bar" button to open the form.
   * Fill in the task name and deadline, then click "Save Task."

2. **Mark Task as Completed:**

   * Click on a task to toggle its completion status.
   * Completed tasks move to the "Completed" section with a timestamp.

3. **Edit a Task:**

   * Click the edit icon (✏️) on a task to open the edit modal.
   * Update the task details and save changes.

4. **Delete a Task:**

   * Click the delete icon (🗑️) on a task to remove it.

5. **Notifications:**

   * Toast notifications provide feedback on actions like adding, editing, or deleting tasks.

---

## Future Enhancements

* **Search and Filter:**

  * Implement a search bar and filters for task management.

* **Persistent Storage:**

  * Integrate local storage or backend API to persist tasks.
---

## Acknowledgments
* **React Toastify:** For providing user-friendly toast notifications.
* **Bootstrap:** For responsive and easy-to-use styling.
