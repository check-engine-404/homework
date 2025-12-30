// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

const myFirstName = "Igor";
const myLastName = "Tulenev";
const isStudent = true;

console.log(myFirstName, myLastName, isStudent);

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

const age = 32;
const currentYear = 2025;

//const birthYear = currentYear - age

let x;
x = age;

let y = currentYear;

const birthYear = y - x;

console.log(birthYear);

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

console.log(
  `Меня зовут ${myFirstName} ${myLastName}, мне ${age} года. Я ученик курса: ${isStudent}.`
);

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;

let a = "123"; // это string
console.log(a);

let b = +"456"; // это число
console.log(b);

let c = Number("789"); // это Number
console.log(c);

let d = Boolean(0); // это false (0)
console.log(d);

let e = Boolean(" "); // это true (1)
console.log(e);

let result = a + b;
console.log(result);

result = a + b + c;
console.log(result);

result = a + b + c + d;
console.log(result);

result = a + b + c + d + e; //123456789falsetrue
console.log(result);

result = b + c + d + e; //1246
console.log(result);
