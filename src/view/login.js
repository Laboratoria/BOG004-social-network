import { changeView } from "../view-controler/controler.js";

export const login = () => {
  const viewLoginHtml = document.getElementById("root");
  const view = `
    <div id="viewLogin">
        <a href="#/login"></a>
        <div>
            <img id="logoRes-signUp" src="/images/logo-ninja-signup-responsive.png">
        </div>
        <div class="box-form">
            <form id="form-login" action="">
              <div class="box-input">
                <label class="labels" for="email">Ingresa tu correo registrado</label>
                <input class="inputs" id= "email" type="email" placeholder="ejemplo@gmail.com" required>
              </div>
              <div class="box-input">
                <label class="labels" for="password">Contraseña</label>
                <input class="inputs" id= "password" type="password" required>
              </div>
              <section id="alertMessageLogin" class="center-message">
                <p id="errorMessageLogin">Mensaje de alerta</p>
              </section>
              <section class="align-buttons">
                <p id="guide-button-signUp">¿Eres un usuario nuevo?</p>
                <button id="btn-register-signUp" class="btn-border">REGÍSTRATE</button>
                <button id="btn-feed" class="btn-background" type="submit">INGRESAR</button>
              </section>
              <section id="signUp-google">
                <h3>O ingresa con: </h3> 
                <a href=""><img class="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
              </section>
            </form>
        </div>            
    </div>
    `;
  viewLoginHtml.innerHTML = view;
  document.querySelector("#btn-feed").addEventListener("click", () => {
    //Recordar cambiar la ruta cuando realicemos el template del muro de la aplicación
    window.location.hash = "/feed";
  });

  document
    .querySelector("#btn-register-signUp")
    .addEventListener("click", () => {
      window.location.hash = "/register";
    });

  return viewLoginHtml;
};
