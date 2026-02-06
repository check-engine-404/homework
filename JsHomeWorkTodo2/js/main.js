"use strict";

const arrTodos = [];
const keyName = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const getNewTodoId = (todos) => {
  let arrNumb = todos.map((i) => i[keyName.id]);
  if (arrNumb.length === 0) {
    return 0;
  } else {
    return Math.max(...arrNumb);
  }
};
const createTodo = (todos, text) => {
  const objectTodo = {
    [keyName.id]: getNewTodoId(todos) + 1,
    [keyName.text]: text,
    [keyName.is_completed]: false,
  };
  todos.push(objectTodo);
  console.log(objectTodo);
};

createTodo(arrTodos, "Test");
createTodo(arrTodos, "Test2");
createTodo(arrTodos, "Test3");

// const completedTodo = (todo, id) => {
//   let stop = false;
//   todo.forEach((i) => {
//     if (id === i.id) {
//       i.is_completed = !i.is_completed;
//       stop = true;
//     }
//   });
//   if (!stop) console.error("You are enter big number");
// };

const completedTodo = (todos, id) => {
  let found = todos.find((i) => i[keyName.id] === id);
  if (found) {
    found[keyName.is_completed] = !found[keyName.is_completed];
  } else {
    console.error("You are enter big number");
  }
};

completedTodo(arrTodos, 2);
console.log(arrTodos);

const deleteTodobyId = (todos, id) => {
  const index = todos.findIndex((i) => i[keyName.id] === id);
  if (index === -1) {
    console.error(`That ${id} not found`);
  } else {
    return todos.splice(index, 1);
  }
};

deleteTodobyId(arrTodos, 11);
console.log(arrTodos);

const form = document.querySelector(".todos__form");
const input = document.querySelector(".todos__input");
const ul = document.querySelector(".todos__list");

const createTodoElement = (text) => {
  const li = document.createElement("li");
  li.classList.add("todos__item");
  li.innerHTML = `
      <div class="todos__item-text">${text}</div>
        <div class="todos__block-button">
           <button class="todos__block-button--enter">v</button>
           <button class="todos__block-button--close">x</button>
      </div>
      `;
  ul.append(li);
};

const handCreateTodo = (todos, text) => {
  createTodoElement(text);
  createTodo(todos, text);
};
const button = document.querySelector(".todos__button");
button.addEventListener("click", () => {
  const text = input.value;
  handCreateTodo(arrTodos, text);
});
