// Este es el punto de entrada de tu aplicacion
import { changeViews } from "./controller/router.js";
// import { myFunction } from './lib/index.js';

const init = () => {
  changeViews(window.location.hash);
  window.addEventListener("hashchange", () =>
    changeViews(window.location.hash)
  );
};
window.addEventListener("load", init);
