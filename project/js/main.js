const buttonOpen = document.querySelector(".burger-icon");

buttonOpen.addEventListener("click", () => {

  if (document.documentElement.clientWidth > 900) return;
  
  if (!document.body.classList.contains("body--opened-menu"))
    document.body.classList.add("body--opened-menu");
  else document.body.classList.remove("body--opened-menu");
});
