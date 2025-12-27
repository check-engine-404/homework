/*===  JS code на выбор языка сайта с выпадающим меню  ===*/

// Получаем элементы
const langContainer = document.querySelector(".lang"); // контейнер
const langItem = document.querySelector(".lang__item");
const dropdown = document.querySelector(".dropdown");
const flagIcon = document.querySelector(".flag-icon");
const langSelection = document.querySelector(".lang-selection");

// Обработчик клика на весь контейнер .lang
langContainer.addEventListener("click", (event) => {
  const targetLi = event.target.closest("li");
  // Если клик по пункту внутри dropdown
  if (targetLi && targetLi.parentElement.classList.contains("dropdown")) {
    // Меняем язык
    const flagSrc = targetLi.getAttribute("data-flag");
    const langCode = targetLi.getAttribute("data-short");

    flagIcon.src = flagSrc;
    langSelection.textContent = langCode;

    // Закрываем меню
    dropdown.style.display = "none";
  } else {
    // Иначе, при клике на любой другой части .lang, переключаем отображение меню
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
});

// Обработка клика вне .lang для закрытия меню
document.addEventListener("click", (event) => {
  if (!document.querySelector(".lang").contains(event.target)) {
    dropdown.style.display = "none";
  }
});

/*===   JS code на обратный отсчет до конца акции   ===*/

window.onload = function () {
  const endDateStr = "2025-12-31T23:59:59"; // редактируйте при необходимости
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
modalCancle.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
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

/*=============================   DraggablePoint =======================================*/

const point = document.getElementById("draggablePoint");
const line = document.getElementById("line");
const discountSpan = document.querySelector(".chart__text-discount");
const riskSpan = document.querySelector(".chart__text-risk");

let isDragging = false;

point.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", endDrag);
document.addEventListener("mousemove", duringDrag);

// Для мобильных устройств
point.addEventListener("touchstart", startDrag);
document.addEventListener("touchend", endDrag);
document.addEventListener("touchmove", duringDrag);

function startDrag(e) {
  e.preventDefault();
  isDragging = true;
}

function endDrag(e) {
  isDragging = false;
}

function duringDrag(e) {
  if (!isDragging) return;

  let clientX;
  if (e.touches) {
    clientX = e.touches[0].clientX;
  } else {
    clientX = e.clientX;
  }

  const rect = line.getBoundingClientRect();
  let newLeft = clientX - rect.left;

  // Ограничения по ширине линии
  if (newLeft < 0) newLeft = 0;
  if (newLeft > rect.width) newLeft = rect.width;

  // Обновляем позицию точки
  point.style.left = `${newLeft}px`;

  // Вычисляем процентное положение точки
  const percentage = (newLeft / rect.width) * 100;

  // Меняем текст в зависимости от положения
  if (percentage <= 40) {
    discountSpan.textContent = "до 5%";
    riskSpan.textContent = "Низкий риск";
    riskSpan.style.backgroundImage =
      "linear-gradient(rgba(66, 89, 74, 0.4), rgba(101, 204, 125, 0.22))";
    point.style.backgroundImage = `linear-gradient(to right, #61bb75)`;
    line.style.backgroundImage = `linear-gradient(to right, #61bb75 ${percentage}%, #303030 ${percentage}%)`;
  } else if (percentage > 40 && percentage <= 75) {
    discountSpan.textContent = "до 10%";
    riskSpan.textContent = "Средний риск";
    riskSpan.style.backgroundImage =
      "linear-gradient(rgba(148, 140, 49, 0.26), rgba(245, 222, 17, 0.25))";
    point.style.backgroundImage = `linear-gradient(to right, #f7de11)`;
    line.style.backgroundImage = `linear-gradient(to right, #f7de11 ${percentage}%, #303030 ${percentage}%)`;
  } else {
    discountSpan.textContent = "до 15%";
    riskSpan.textContent = "Высокий риск";
    riskSpan.style.backgroundImage =
      "linear-gradient(rgba(148, 49, 49, 0.26), rgba(245, 17, 17, 0.25))";
    point.style.backgroundImage = `linear-gradient(to right, #f51111)`;
    line.style.backgroundImage = `linear-gradient(to right, #f51111 ${percentage}%, #303030 ${percentage}%)`;
  }
}

/*=============================   Accordion =======================================*/
// Выбираем все элементы .accordion__item
document.querySelectorAll(".accordion__item").forEach((item) => {
  // Добавляем обработчик клика ко всему элементу
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const hiddenContent = item.querySelector(".accordion__item-hidden");
    const visionSpan = item.querySelector(".accordion__item-vision span");
    const button = item.querySelector(".accordion__item-click"); // если нужен для стилей

    const isOpen = hiddenContent.style.display === "block";

    // Закрываем все
    document.querySelectorAll(".accordion__item-hidden").forEach((content) => {
      content.style.display = "none";
    });

    // Восстанавливаем бордер у всех кнопок
    document.querySelectorAll(".accordion__item-click").forEach((btn) => {
      btn.style.border = "3px solid #272932";
      btn.classList.remove("rotate180");
    });

    // Убираем фон у всех vision span
    document
      .querySelectorAll(".accordion__item-vision span")
      .forEach((span) => {
        span.style.background = "";
      });

    // Если текущий блок был закрыт, открываем его
    if (!isOpen) {
      hiddenContent.style.display = "block";

      // Добавляем фон
      if (visionSpan) {
        visionSpan.style.background =
          "linear-gradient(to bottom, #6ba758, #23503d)";
      }
      // Меняем бордер только у текущего элемента
      if (button) {
        // Вращаем стрелку
        button.classList.add("rotate180");
        // Меняем бордер
        button.style.border = "3px solid #62666f";
      }
    }
  });
});

const telInputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask("+7 (999) 999 - 99 - 99");
im.mask(telInputs);
