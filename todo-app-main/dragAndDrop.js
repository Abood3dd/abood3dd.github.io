function getDragAfterElement(container, y) {
  const draggableElements = Array.from(
    container.querySelectorAll(".task:not(.dragging)")
  );
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

tasksContainer.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("dragging");
});

tasksContainer.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

tasksContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

tasksContainer.addEventListener("drop", (e) => {
  const id = e.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(id);
  const dropzone = e.target.closest(".task");
  if (dropzone) {
    const afterElement = getDragAfterElement(tasksContainer, e.clientY);
    if (afterElement == null) {
      tasksContainer.appendChild(draggableElement);
    } else {
      tasksContainer.insertBefore(draggableElement, afterElement);
    }
  }
});
// Make tasks draggable on touch devices
tasksContainer.addEventListener("touchstart", (e) => {
  const id = e.target.id;
  e.target.classList.add("dragging");
  e.target.style.opacity = "0.5";
  e.preventDefault();
});

tasksContainer.addEventListener("touchend", (e) => {
  e.target.classList.remove("dragging");
  e.target.style.opacity = "1";
  e.preventDefault();
});

tasksContainer.addEventListener("touchmove", (e) => {
  e.preventDefault();
  e.target.style.opacity = "0.5";
});
