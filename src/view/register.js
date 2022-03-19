import { changeView } from "../view-controler/controler.js";

export const register = () => {
  const viewRegisterHtml = document.getElementById("root");
  const view = `
        <div id="viewRegister">
        <div id="logoRes-signUp">
          <img src="/images/logo-ninja-signup-responsive.svg">
        </div>
            <a href="#/register"></a>
            <div class="box-form">
              <form action="">
                  <label for="">Nombre</label>
                  <input id="nameRegister" type="text">
                  <label for="">Apellido</label>
                  <input id="lastNameRegister" type="text">
                  <label for="">Correo Electrónico</label>
                  <input id="emailRegister" type="email" placeholder="ejemplo@gmail.com">
                  <label for="">Contraseña</label>
                  <input id="passwordRegister" type="password">
              <h3>o registrate con:</h3> 
              <a href=""><img class="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
              </form>
            </div>
            <section>
                <p>¿Ya tienes cuenta?</p>
                <button id="btn-login" class="btn-border">INICIAR SESIÓN</button>
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
