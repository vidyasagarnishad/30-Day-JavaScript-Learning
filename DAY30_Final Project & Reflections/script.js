// DAY 30: Final Project & Reflections
// Simple To-Do List Application

// Function to add a new task
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskValue = taskInput.value.trim(); // Remove extra spaces

      if (taskValue === "") {
        alert("Please enter a task!"); // Alert if input is empty
        return;
      }

      // Create a new list item
      const li = document.createElement("li");
      li.textContent = taskValue;

      // Add task to the task list
      document.getElementById("taskList").appendChild(li);

      // Clear input field after adding
      taskInput.value = "";
    }


