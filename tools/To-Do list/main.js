      const addTask = document.getElementById("add-task");
      const taskContainer = document.getElementById("task-container");
      const inputTask = document.getElementById("input-task");

      // Load tasks from local storage on page load
      document.addEventListener("DOMContentLoaded", function () {
        loadTasks();
      });

        addTask.addEventListener("click", function () {
        let task = document.createElement("div");
        task.classList.add("task");
        let li = document.createElement("li");
        li.innerText = inputTask.value;
        task.appendChild(li);

        let checkButton = document.createElement("button");
        checkButton.innerHTML = "<i class='fa-solid fa-check'></i>";
        checkButton.classList.add("checkTask");
        task.appendChild(checkButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        deleteButton.classList.add("deleteTask");
        task.appendChild(deleteButton);

        if (inputTask.value === "") {
          alert("Please Enter a Task ");
        } else {
          taskContainer.appendChild(task);
          saveTask(inputTask.value);
        }

        inputTask.value = "";

        checkButton.addEventListener("click", function () {
          checkButton.parentElement.style.textDecoration = "line-through";
        });

        deleteButton.addEventListener("click", function (e) {
          let target = e.target;
          let taskText = target.parentElement.firstChild.innerText;
          target.parentElement.remove();
          removeTask(taskText);
        });
      });

      function saveTask(task) {
        // Get existing tasks from local storage or create an empty array
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add the new task to the array
        tasks.push(task);

        // Save the updated tasks array back to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function loadTasks() {
        // Get tasks from local storage or create an empty array
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Display tasks on the page
        tasks.forEach(function (task) {
          createTaskElement(task);
        });
      }

      function removeTask(task) {
        // Get existing tasks from local storage or create an empty array
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Remove the task from the array
        tasks = tasks.filter(function (t) {
          return t !== task;
        });

        // Save the updated tasks array back to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function createTaskElement(taskText) {
        let task = document.createElement("div");
        task.classList.add("task");
        let li = document.createElement("li");
        li.innerText = taskText;
        task.appendChild(li);

        let checkButton = document.createElement("button");
        checkButton.innerHTML = "<i class='fa-solid fa-check'></i>";
        checkButton.classList.add("checkTask");
        task.appendChild(checkButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        deleteButton.classList.add("deleteTask");
        task.appendChild(deleteButton);

        taskContainer.appendChild(task);

        checkButton.addEventListener("click", function () {
          checkButton.parentElement.style.textDecoration = "line-through";
        });

        deleteButton.addEventListener("click", function (e) {
          let target = e.target;
          let taskText = target.parentElement.firstChild.innerText;
          target.parentElement.remove();
          removeTask(taskText);
        });
      }