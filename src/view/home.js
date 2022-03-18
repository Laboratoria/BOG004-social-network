import { changeView } from "../view-controler/controler.js";

export const home = () => {
  const viewHomeHtml = document.getElementById("root");
  const view = `
        <div id="viewHome">
            <a href="#/"></a>
            <h1>home</h1>
            <button id="btn-register">Regístrate</button>
            <button id="btn-loginhome">Iniciar Sesión</button>
        </div>
    `;
  viewHomeHtml.innerHTML = view;
  document.querySelector("#btn-register").addEventListener("click", () => {
    changeView("#/register");
  });
  document.querySelector("#btn-loginhome").addEventListener("click", () => {
    changeView("#/login");
  });
  return viewHomeHtml;
};
