const themeBTN = document.querySelector(".theme");
const inputBTN = document.querySelector(".inputBTN");
const tasksContainer = document.querySelector(".tasks_container");
const filters = document.querySelector(".filters");
const clearCompleted = document.querySelector(".clearCompleted");
//default theme
let theme = "dark";
// init
if (!localStorage.getItem("tasks"))
  localStorage.setItem("tasks", JSON.stringify([]));
let id = JSON.parse(localStorage.getItem("tasks"))?.slice(-1)[0]?.id || 0;
// importing from local storage
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
tasksFromLocalStorage.forEach((task) => addTask(task));
updateNum();
//
themeBTN.addEventListener("click", () => {
  if (theme == "light") {
    themeBTN.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`;
    theme = "dark";
  } else {
    themeBTN.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`;
    theme = "light";
  }
  ThemeMode(theme);
});

inputBTN.addEventListener("click", () => {
  const taskContent = document.querySelector(".task-content");
  if (taskContent.value) {
    let task = taskContent.value;
    taskContent.value = "";
    id++;
    let taskOBJ = {
      text: task,
      completed: false,
      id: id,
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskOBJ);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(taskOBJ);
  }
  tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];

  updateNum();
});

tasksContainer.addEventListener("change", (e) => {
  if (e.target.matches(".check input[type='checkbox']")) {
    let checkbox = e.target;
    checkbox.closest(".task").classList.toggle("completed");
    tasksFromLocalStorage.forEach((task) => {
      if (task.id === parseInt(e.target.closest(".task").id)) {
        task.completed = checkbox
          .closest(".task")
          .classList.contains("completed");
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
  }
});
tasksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("crossDiv")) {
    let cross = e.target;

    tasksFromLocalStorage = tasksFromLocalStorage.filter(
      (task) => task.id !== parseInt(cross.closest(".task").id)
    );
    localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));

    cross.closest(".task").remove();

    updateNum();
  }
});
filters.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    filter(e.target.id);
  }
});
clearCompleted.addEventListener("click", (e) => {
  tasksContainer.querySelectorAll(".task").forEach((task) => {
    if (task.classList.contains("completed")) {
      tasksFromLocalStorage = tasksFromLocalStorage.filter(
        (taskF) => taskF.id !== parseInt(task.id)
      );
      localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
      task.remove();
    }
  });
  updateNum();
});

// Make tasks draggable

function ThemeMode(mode) {
  document.documentElement.style.setProperty(
    "--bg-color",
    `var(--very-${mode}-blue)`
  );
  document.documentElement.style.setProperty(
    "--task-bg-color",
    `var(--very-${mode}-${mode == "dark" ? "desaturated" : "grayish"}-blue)`
  );
  document.documentElement.style.setProperty(
    "--task-input-color",
    `var(--very-${mode == "dark" ? "light" : "dark"}-grayish-blue)`
  );
}
function addTask(...taskObjs) {
  const fragment = document.createDocumentFragment();
  taskObjs.forEach((taskObj) => {
    fragment.appendChild(createTaskElement(taskObj));
  });
  tasksContainer.appendChild(fragment);
}

function createTaskElement(taskObj) {
  let task = document.createElement("div");
  task.draggable = true;
  task.classList = `task ${taskObj.completed ? "completed" : ""}`;
  task.id = taskObj.id;
  let label = document.createElement("label");
  let checkDiv = document.createElement("div");
  checkDiv.classList.add("check");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", taskObj.id);

  const checkSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
        />
    </svg>`;
  let p = document.createElement("p");
  p.textContent = taskObj.text;
  p.classList.add("task_text");
  let crossDiv = document.createElement("div");
  crossDiv.classList.add("crossDiv");
  let crossSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="crossDiv">
  <path
  fill="#494C6B"
  
  fill-rule="evenodd"
  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
  />
  </svg>`;

  let hr = document.createElement("hr");

  // assembling everything together
  checkDiv.appendChild(checkbox);
  checkDiv.innerHTML += checkSVG;
  label.appendChild(checkDiv);
  task.appendChild(label);
  task.appendChild(p);
  crossDiv.innerHTML = crossSVG;
  task.appendChild(crossDiv);
  task.appendChild(hr);

  return task;
}
function updateNum() {
  document.querySelector(".items_left span").textContent =
    tasksContainer.children.length;
}
function filter(type) {
  tasksContainer.querySelectorAll(".task").forEach((task) => {
    if (
      type === "All" ||
      (type === "Active" && !task.classList.contains("completed")) ||
      (type === "Completed" && task.classList.contains("completed"))
    ) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
