const buttonOpen = document.querySelector(".btn");
const windowOpen = document.querySelector(".area");
const buttonClose = document.querySelector(".area__btn");

buttonOpen.addEventListener("click", () => {
  windowOpen.style.visibility = "visible";
});

buttonClose.addEventListener("click", () => {
  windowOpen.style.visibility = "hidden";
});
