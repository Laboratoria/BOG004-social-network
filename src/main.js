//Importamos la funcion de routeo

import { changeView } from "./view-controler/controler.js";
const start = () => {
    window.addEventListener("hashchange", () => changeView(window.location.hash));
};
window.addEventListener("load", start);
changeView();