const buttonOpen = document.querySelector(".burger-icon");

buttonOpen.addEventListener("click", () => {
  if (document.documentElement.clientWidth > 900) return;

  if (!document.body.classList.contains("body--opened-menu"))
    document.body.classList.add("body--opened-menu");
  else document.body.classList.remove("body--opened-menu");
});

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
