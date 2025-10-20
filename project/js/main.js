const buttonOpen = document.querySelector(".burger-icon");

buttonOpen.addEventListener("click", () => {
  if (document.documentElement.clientWidth > 900) return;

  if (!document.body.classList.contains("body--opened-menu"))
    document.body.classList.add("body--opened-menu");
  else document.body.classList.remove("body--opened-menu");
});

/*====================================================================*/

const openModal = document.querySelector(".about__img-control");
const closeModal = document.querySelector(".modal__cancle");

if (openModal && closeModal) {
  openModal.addEventListener("click", () => {
    document.body.classList.add("body--opened-modal");
  });

  closeModal.addEventListener("click", () => {
    document.body.classList.remove("body--opened-modal");
  });
}

/*====================================================================*/

const tabControls = document.querySelector(".tab-controls");

tabControls.addEventListener("click", toggleTab);

function toggleTab(e) {
  const tabControl = e.target.closest(".tab-controls__link");

  if (!tabControl) return;
  e.preventDefault();
  if (tabControl.classList.contains("tab-controls__link--active")) return;

  const tabContentID = tabControl.getAttribute("href");

  document
    .querySelector(".tab-content--show")
    .classList.remove("tab-content--show");
  document.querySelector(tabContentID).classList.add("tab-content--show");

  document
    .querySelector(".tab-controls__link--active")
    .classList.remove("tab-controls__link--active");
  tabControl.classList.add("tab-controls__link--active");
}

/*====================================================================*/

const accordionLists = document.querySelectorAll(".accordion-list");

accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    const accordionControl = e.target.closest(".accordion-list__control");
    if (!accordionControl) return;

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    accordionItem.classList.toggle("accordion-list__item--opened");

    if (accordionItem.classList.contains("accordion-list__item--opened")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});

/*======================================================================*/

const swiper = new Swiper(".gallery__slider", {
  spaceBetween: 32,
  slidesPerView: 1.5,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },

  breakpoints: {
    601: {
      slidesPerView: 3,
    },
    1101: {
      slidesPerView: 4,
    },
  },
});
