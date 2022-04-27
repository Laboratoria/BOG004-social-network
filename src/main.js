import { myFunction } from "./lib/index.js";

myFunction();

import { changeView } from "./view-controler/router.js";

const init = () => {
  console.log(window);
  changeView("#/");
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
window.addEventListener("load", init);
