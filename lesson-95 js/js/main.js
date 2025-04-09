const firstName = "Igor";
const surName = "Tyulenv";
let userAge = "32";
let userProfession = "driver";
let currentRegistrationDate = "21.12.1232";

console.log(
  firstName,
  surName,
  userAge,
  userProfession,
  currentRegistrationDate
);

function firstNames(name) {
  console.log("Hello " + name);
}

firstNames("Igor");

const arrayNumber = [1, 22, 3, 76, 5, 6, 9.1, 88, 10];

function showNumberArray(arr) {
  arr.forEach(function (nubmer) {
    if (nubmer >= 10) {
      console.log(nubmer);
    }
  });
}

showNumberArray(arrayNumber);

function calculator(numbA, numbB, operator) {
  if (operator == "minus") {
    return numbA - numbB;
  } else if (operator == "plus") {
    return numbA + numbB;
  } else if (operator == "devide") {
    return numbB !== 0 ? numbA / numbB : "Ошибка: деление на 0!";
  } else if (operator == "multiply") {
    return numbA * numbB;
  }
}

const result = calculator(6, 10, "devide");
console.log(result);

const infoUser = {
  name: "Igor",
  age: 32,
  job: "Driver",
  study: "program",
  welcome(name) {
    console.log(`Hello ${name}`);
  },
};
infoUser.welcome("Jees");

const arrayObject = [
  {
    name: "Konstantin",
    age: 23,
    gender: "man",
  },
  {
    name: "Georgiy",
    age: 27,
    gender: "man",
  },
  {
    name: "Valeria",
    age: 25,
    gender: "woman",
  },
  {
    name: "Alexey",
    age: 27,
    gender: "man",
  },
  {
    name: "Kristina",
    age: 25,
    gender: "woman",
  },
];

let boy = 0;
let girl = 0;

arrayObject.forEach(function (i) {
  if (i.gender == "man") {
    boy++;
  } else {
    girl++;
  }
});

console.log(girl);
console.log(boy);
