const BURGER = document.querySelector("#burger");
const MENU = document.querySelector("#menu");

BURGER.addEventListener("click", () => {
  if (MENU.classList.contains("hidden")) {
    MENU.classList.remove("hidden");
  } else {
    MENU.classList.add("hidden");
  }
});
