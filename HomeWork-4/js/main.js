// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(price, discount, tax) {
  if (isNaN(price) || isNaN(discount) || isNaN(tax)) return;
  const priceDiscount = price - (price / 100) * discount;
  const priceTax = priceDiscount + priceDiscount * tax;
  return priceTax;
}
calculateFinalPrice(100, 10, 0);
const resultShow = calculateFinalPrice(100, 10, 0);
console.log(resultShow);

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess() {
  const name = prompt("Введите имя пользователя");
  const PASSWORD = Number(prompt("Введите пароль"));

  if (name === "admin" && PASSWORD === 123456) {
    return alert("Доступ разрешён!");
  } else {
    return alert("Доступ запрещён!"), checkAccess();
  }
}

checkAccess();

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const getTimeOfDay = () => {
  const number = +prompt("Введите число от 0 до 23, и мы покажем время суток");
  switch (true) {
    case isNaN(number) || number < 0 || number > 23:
      alert("Укажите число в заданном диапазоне от 0 до 23");
      getTimeOfDay();
      return;
    case number >= 0 && number <= 5:
      alert("Сейчас Ночь");
      break;
    case number >= 6 && number <= 11:
      alert("Сейчас Утро");
      break;
    case number >= 12 && number <= 17:
      alert("Сейчас День");
      break;
    case number >= 18 && number <= 23:
      alert("Сейчас Вечер");
      break;
  }
};

getTimeOfDay();

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
  const a = start;
  const b = end;

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(3, 5));
