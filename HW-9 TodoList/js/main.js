const todos = [];
const keyNames = {
  id: "id",
  text: "text",
  completed: "completed",
};

const getMaxId = (arr) => {
  // const newArrValueId = arr.map((i)=> i[keyNames.id])
  // if(newArrValueId.length === 0)return 0
  // return Math.max(...newArrValueId)

  /*let value = 0
  arr.forEach((i)=>{
    if(i[keyNames.id] > value){value =i[keyNanes.id]}}) */

  /*const newArrId = arr.map((i) => i[keyNames.id]) 
  const arrSort = newArrId.sort(a,b)
  return arrSort.length-1
  */

  /*
  let max = 0
  for(const item of arr){
  if(item[keyNames.id] > max){max = item[keyNames.id]}
  } 
  return max*/
  return arr.reduce((acc, i) => {
    if (i[keyNames.id] > acc) {
      acc = i[keyNames.id];
      return acc;
    } else {
      return acc;
    }
  }, 0);
};

const addTodo = (text) => {
  if (text === undefined || !text) {
    console.error(`You are entered invalid value ${text}!`);
    return;
  }
  const objectTodo = {
    [keyNames.id]: getMaxId(todos) + 1,
    [keyNames.text]: text,
    [keyNames.completed]: false,
  };
  todos.push(objectTodo);
  return objectTodo;
};

const deleteTodo = (arr, id) => {
  const indexArr = arr.findIndex((i) => {
    return i[keyNames.id] === id;
  });
  return arr.splice(indexArr, 1);
};

const toggleTodo = (arr, id) => {
  const elemById = arr.find((i) => i[keyNames.id] === id);
  if (!elemById) return console.error(`Element of ${id} not found!`);
  elemById[keyNames.completed] = !elemById[keyNames.completed];
};

const ul = document.querySelector(".todo__ul");

const renderTodo = (todoObject) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const buttonDone = document.createElement("button");
  const buttonBox = document.createElement("div");

  buttonBox.classList.add("todo__li-button");
  li.classList.add("todo__li");
  li.dataset.id = todoObject[keyNames.id];
  span.classList.add("todo__span");
  span.textContent = todoObject[keyNames.text];
  buttonDone.classList.add("todo__button-done");
  buttonDone.textContent = "O";
  button.classList.add("todo__button-close");
  button.textContent = "X";

  li.append(span);
  li.append(buttonBox);
  buttonBox.append(buttonDone);
  buttonBox.append(button);
  ul.append(li);
};

const input = document.querySelector(".todo__input");
const button = document.querySelector(".todo__button-enter");

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
