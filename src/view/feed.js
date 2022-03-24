import { changeView } from "../view-controler/controler.js";

export const feed = () => {
  const viewFeedHtml = document.getElementById("root");
  const view = `
    <a href="#/feed"></a>
    <h1>Este es nuestro muro</h1>
    <button id="buttonHero"> Inicio </button>
    `;

  viewFeedHtml.innerHTML = view;

  document.querySelector("#buttonHero").addEventListener("click", () => {
    //Recordar cambiar la ruta cuando realicemos el template del muro de la aplicación
    window.location.hash = "/";
  });

  return viewFeedHtml;
};
