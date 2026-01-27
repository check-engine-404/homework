"use strict";

const arrTodos = [];
const keyName = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const getNewTodoId = (todo) => {
  let arrNumb = todo.map((i) => i[keyName.id]);
  if (arrNumb.length === 0) {
    return 0;
  } else {
    return Math.max(...arrNumb);
  }
};
const createTodo = (todo, text) => {
  const objectTodo = {
    [keyName.id]: getNewTodoId(todo) + 1,
    [keyName.text]: text,
    [keyName.is_completed]: false,
  };
  todo.push(objectTodo);
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

const completedTodo = (todo, id) => {
  let found = todo.find((i) => i[keyName.id] === id);
  if (found) {
    found[keyName.is_completed] = !found[keyName.is_completed];
  } else {
    console.error("You are enter big number");
  }
};

completedTodo(arrTodos, 2);
console.log(arrTodos);

const deleteTodobyId = (todo, id) => {
  const index = todo.findIndex((i) => i[keyName.id] === id);
  if (index === -1) {
    console.error(`That ${id} not found`);
  } else {
    return todo.splice(index, 1);
  }
};

deleteTodobyId(arrTodos, 11);
console.log(arrTodos);
