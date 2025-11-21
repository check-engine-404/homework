/*===  JS code на выбор языка сайта с выпадающим меню  ===*/

function toggleMenu(event) {
  event.preventDefault();
  const item = event.currentTarget.closest(".lang__item");
  item.classList.toggle("open");
}

document.querySelectorAll(".dropdown li").forEach((li) => {
  li.addEventListener("click", () => {
    const langCode = li.getAttribute("data-lang");
    const flagSrc = li.getAttribute("data-flag");
    const parentItem = li.closest(".lang__item");

    // Обновляем отображение выбранного языка
    const shortName = li.getAttribute("data-short");
    parentItem.querySelector(".lang-selection").textContent = shortName;

    // Обновляем иконку флага
    const flagIcon = parentItem.querySelector(".flag-icon");
    flagIcon.src = flagSrc;

    // Обновляем активный класс
    parentItem
      .querySelectorAll(".dropdown li")
      .forEach((i) => i.classList.remove("active"));
    li.classList.add("active");

    // Закрываем меню
    parentItem.classList.remove("open");

    // Тут можно добавить логику смены языка сайта
  });
});

/*===   JS code на обратный отсчет до конца акции   ===*/

window.onload = function () {
  const endDateStr = "2025-12-19T18:06:59"; // редактируйте при необходимости
  const endDate = new Date(endDateStr).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML =
        "Обратный отсчет завершен!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
};

/*==========================    MODAL  =================================*/

const modalOpen = document.querySelector(".header__button-reg");
const modalCancle = document.querySelector(".modal__cancel-click");
const modal = document.querySelector(".modal");

modalOpen.addEventListener("click", function () {
  modal.style.display = "flex";
  return;
});
modalCancle.addEventListener("click", function () {
  modal.preventDefault;
  modal.style.display = "none";
  return;
});

/*==========================    Burger  =================================*/

const burger = document.getElementById("burger");
const navMenu = document.querySelector(".nav");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Выбираем все ссылки внутри меню навигации
document.querySelectorAll(".nav__list li a").forEach((link) => {
  link.addEventListener("click", () => {
    // Убираем класс show у блока навигации
    document.querySelector(".nav").classList.remove("show");
  });
});
