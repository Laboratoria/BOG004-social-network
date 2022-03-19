import { changeView } from "../view-controler/controler.js";

export const hero = () => {
  const viewHeroHtml = document.getElementById("root");
  const view = `
        <div id="viewHero">
            <a href="#/"></a>
            <div id="logoRes">
              <img src="/images/ninja-logo-responsive.svg">
            </div>
            <p id="text-intro">SI ERES UN CRACK, AQUÍ CONECTARÁS CON EMPRESAS QUE NECESITEN TUS CONSULTORÍAS, Y SI ERES EMPRESA, AQUÍ ENCONTRARÁS A LA PERSONA INDICADA PARA RESOLVER TUS DUDAS.</p>
            <div id="buttons-hero">
              <button id="btn-register" class="btn-border">REGÍSTRATE</button>
              <button id="btn-loginhero" class="btn-background">INICIAR SESIÓN</button>
            </div>
        </div>
    `;
  viewHeroHtml.innerHTML = view;
  document.querySelector("#btn-register").addEventListener("click", () => {
    changeView("#/register");
  });
  document.querySelector("#btn-loginhero").addEventListener("click", () => {
    changeView("#/login");
  });
  return viewHeroHtml;
};
