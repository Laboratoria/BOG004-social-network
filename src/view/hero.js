import { changeView } from "../view-controler/controler.js";

export const hero = () => {
    const viewHeroHtml = document.getElementById("root");
    const view = `
        <div id="viewHero">
            <a href="#/"></a>
            <div>
              <img id="logoRes" src="./images/ninja-logo-responsive.svg">
            </div>
            <h1>Red Social para<span class="relevant"> ofrecer y encontrar servicios </span>en tecnologías de la información y la comunicación,<span class="relevant"> (TICS).</span></h1>
            <p id="text-intro">Si eres un crack, aquí conectarás con empresas que necesiten tus consultorías, y si eres empresa, aquí encontrarás a la persona indicada para resolver tus dudas.
            </p>
            <div id="buttons-hero">
              <button id="btn-registerHero" class="btn-border">REGÍSTRATE</button>
              <button id="btn-loginHero" class="btn-background">INICIAR SESIÓN</button>
            </div>
        </div>
    `;
    viewHeroHtml.innerHTML = view;
    document.querySelector("#btn-registerHero").addEventListener("click", () => {
        window.location.hash = "/register";
    });
    document.querySelector("#btn-loginHero").addEventListener("click", () => {
        window.location.hash = "/login";
    });
    return viewHeroHtml;
};