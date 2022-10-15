document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createNewList = document.querySelector("input[type='submit']");
  const input = document.querySelector("#new-task-description");
  const list = document.querySelector("#tasks");
  createNewList.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != "") {
      const button = document.createElement("button");
      button.textContent = "x";
      const newTask = document.createElement("li");
      newTask.textContent = input.value;
      list.appendChild(newTask);
      newTask.appendChild(button);
      input.value = "";
      button.addEventListener("click", () => newTask.remove());
    } else {
      alert("Value can't be empty, please enter a value");
    }
  });
});