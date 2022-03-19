import { changeView } from "../view-controler/controler.js";

export const register = () => {
    const viewRegisterHtml = document.getElementById("root");
    const view = `
        <div id="viewRegister">
          <a href="#/register"></a>
          <div id="logoRes-signUp">
            <img src="/images/logo-ninja-signup-responsive.svg">
          </div>
            <div class="box-form">
              <form action="">
                  <label class="labels" for="">Nombre</label>
                  <input class="inputs" id="nameRegister" type="text">
                  <label class="labels" for="">Apellido</label>
                  <input class="inputs" id="lastNameRegister" type="text">
                  <label class="labels" for="">Correo Electrónico</label>
                  <input class="inputs" id="emailRegister" type="email" placeholder="ejemplo@gmail.com">
                  <label class="labels" for="">Contraseña</label>
                  <input class="inputs" id="passwordRegister" type="password">
              <h3>o registrate con:</h3> 
              <a href=""><img class="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
              </form>
            </div>
            <section class="align-buttons">
            <div class="question-button">
                <p>¿Ya tienes cuenta?</p>
                <button id="btn-login" class="btn-border">INICIAR SESIÓN</button>
                </div>
                <button id="btn-register" class ="btn-background">REGISTRAR CUENTA</button>
            </section>
        </div>
    `;
    viewRegisterHtml.innerHTML = view;

    document.querySelector("#btn-login").addEventListener("click", () => {
        changeView("#/login");
    });

    document.querySelector("#btn-register").addEventListener("click", () => {
        changeView("#/register");
    });

    return viewRegisterHtml;
};