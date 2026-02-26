import { todos } from "./module.js";
import { addTodo } from "./module.js";
import { deleteTodo } from "./module.js";
import { toggleTodo } from "./module.js";
import { ul } from "./view.js";
import { button } from "./view.js";
import { renderTodo } from "./view.js";
import { input } from "./view.js";

button.addEventListener("click", (event) => {
  event.preventDefault();
  const getValueInput = input.value;
  const newObjectTodo = addTodo(getValueInput);
  if (newObjectTodo) {
    input.value = "";
    renderTodo(newObjectTodo);
  } else {
    return;
  }
});

ul.addEventListener("click", (event) => {
  const foundElemClose = event.target.classList.contains("todo__button-close");
  const foundElemDone = event.target.classList.contains("todo__button-done");
  const liActiv = event.target.closest("li");
  const liText = liActiv.querySelector(".todo__span");
  if (foundElemClose) {
    deleteTodo(todos, Number(liActiv.dataset.id));
    liActiv.remove();
  } else if (foundElemDone) {
    liText.classList.toggle("textDecoration");
    toggleTodo(todos, Number(liActiv.dataset.id));
  }
});

todos.forEach((el) => {
  renderTodo(el);
});
