import { keyNames } from "./module.js";

export const ul = document.querySelector(".todo__ul");
export const input = document.querySelector(".todo__input");
export const button = document.querySelector(".todo__button-enter");

export const renderTodo = (todoObject) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const buttonDelete = document.createElement("button");
  const buttonDone = document.createElement("button");
  const buttonBox = document.createElement("div");

  buttonBox.classList.add("todo__li-button");
  li.classList.add("todo__li");
  li.dataset.id = todoObject[keyNames.id];
  span.classList.add("todo__span");
  if(todoObject[keyNames.completed]){span.classList.add("textDecoration")}
  span.textContent = todoObject[keyNames.text];
  buttonDone.classList.add("todo__button-done");
  buttonDone.textContent = "O";
  buttonDelete.classList.add("todo__button-close");
  buttonDelete.textContent = "X";

  li.append(span);
  li.append(buttonBox);
  buttonBox.append(buttonDone);
  buttonBox.append(buttonDelete);
  ul.append(li);
};
