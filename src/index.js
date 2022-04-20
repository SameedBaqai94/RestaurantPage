import navBar from "./nav";

const container = document.querySelector(".container");

window.addEventListener("load", () => {
  let _navB = navBar();
  container.innerHTML = "";
  container.appendChild(_navB.createNav());
});
