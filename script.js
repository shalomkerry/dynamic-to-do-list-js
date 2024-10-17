document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("You have entered nothing");
    } else {
      let task = document.createElement("li");
      task.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      task.appendChild(removeBtn);
      taskList.appendChild(task);
      removeBtn.addEventListener("click", () => {
        task.remove(); // Removes the entire <li> element, including the button
      });
    }
  } //addTask is used to add tasks to the page
  addButton.addEventListener("click", addTask);
  document.addEventListener("DOMContentLoaded", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask();
    }
  });
});
