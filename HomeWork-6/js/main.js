// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(arr) {
  let averageSum = 0;
  arr.forEach((i) => {
    averageSum += i.age;
  });
  return averageSum / arr.length;
}
console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(arr) {
  const newArrayAdmin = [];
  arr.forEach((i) => {
    if (i.isAdmin === true) {
      newArrayAdmin.push(i);
    }
  });
  return newArrayAdmin;
}

const newArrayAdmin = getAllAdmins(users);

console.log(newArrayAdmin);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  const newArrayElement = [];
  if (n === 0) {
    return newArrayElement;
  } else if (n === undefined) {
    newArrayElement.push(arr[0]);
    return newArrayElement;
  }
  for (let i = 0; i < n; i++) {
    if (i === arr.length) break;
    newArrayElement.push(arr[i]);
  }
  return newArrayElement;
}

console.log(first(users, true));
