import navBar from "./nav";
import mainPage from './main';
import menuPage from "./menu";

const container = document.querySelector(".container");
const _navB = navBar();
const _main = mainPage();
const _menu = menuPage();

window.addEventListener("load", () => {
  container.innerHTML = "";
  container.appendChild(_navB.createNav());
  container.appendChild(_main.mainUI())
});


container.addEventListener('click', (e) => {
  if (e.target.id == 'home') {
    container.innerHTML = "";
    container.appendChild(_navB.createNav());
    container.appendChild(_main.mainUI())
  }
  else if (e.target.id == 'menu') {
    container.innerHTML = "";
    container.appendChild(_navB.createNav());
    container.appendChild(_menu.menuUI());
  }
})