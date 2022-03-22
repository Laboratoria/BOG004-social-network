import { changeView } from "../view-controler/controler.js";

export const hero = () => {
  const viewHeroHtml = document.getElementById("root");
  const view = `
        <div id="viewHero">
            <a href="#/"></a>
            <div>
              <img id="logoRes" src="/images/ninja-logo-responsive.svg">
            </div>
            <h1>Ninja Red Social para<span class="relevant"> ofrecer y encontrar servicios </span>en tecnologías de la información y la comunicación,<span class="relevant"> (TICS).</span></h1>
            <p id="text-intro">SI ERES UN CRACK, AQUÍ CONECTARÁS CON EMPRESAS QUE NECESITEN TUS CONSULTORÍAS, Y SI ERES EMPRESA, AQUÍ ENCONTRARÁS A LA PERSONA INDICADA PARA RESOLVER TUS DUDAS.</p>
            <div id="buttons-hero">
              <button id="btn-registerHero" class="btn-border">REGÍSTRATE</button>
              <button id="btn-loginHero" class="btn-background">INICIAR SESIÓN</button>
            </div>
        </div>
    `;
  viewHeroHtml.innerHTML = view;
  document.querySelector("#btn-registerHero").addEventListener("click", () => {
    window.location.hash="/register";
  });
  document.querySelector("#btn-loginHero").addEventListener("click", () => {
    window.location.hash="/login";
  });
  return viewHeroHtml;
}