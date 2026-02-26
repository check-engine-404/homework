export const todos = getToLocalStorage() || [];

const saveToLocalStorage = () =>
  localStorage.setItem("objTodos", JSON.stringify(todos));
function getToLocalStorage() {
  return JSON.parse(localStorage.getItem("objTodos"));
}

export const keyNames = {
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

export const addTodo = (text) => {
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
  saveToLocalStorage();
  return objectTodo;
};

export const deleteTodo = (arr, id) => {
  const indexArr = arr.findIndex((i) => {
    return i[keyNames.id] === id;
  });
  saveToLocalStorage();
  return arr.splice(indexArr, 1);
};

export const toggleTodo = (arr, id) => {
  const elemById = arr.find((i) => i[keyNames.id] === id);
  if (!elemById) return console.error(`Element of ${id} not found!`);
  elemById[keyNames.completed] = !elemById[keyNames.completed];
  saveToLocalStorage();
  return elemById;
};
