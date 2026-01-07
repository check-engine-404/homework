// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Igor",
  age: 32,
  student: "Aroken",
  study: "JavaSrcipt",
  myPhone: {
    model: "iPhone",
    color: "white",
  },
  showObject: function (object) {
    console.log(object);
  },
};

for (let key in person) {
  console.log(`${key}: "${person[key]}"`);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const object = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(object));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Title",
  desctiption: "Text",
  isCompleted: true,
};

const process = {
  isCompleted: false,
};

const cloneAndModify = function (object, modifications) {
  const newObject = { ...object, ...modifications };
  return newObject;
};

const newObject = cloneAndModify(task, process);

for (let key in newObject) {
  console.log(`${key}:`, newObject[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

function callMethodObject(object) {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
}

const myObject = {
  number: 23,
  method: function () {
    console.log("Метод 1 вызван");
  },
  method2: function () {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callMethodObject(myObject);
