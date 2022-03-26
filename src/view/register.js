import { changeView } from "../view-controler/controler.js";
import { registerUser } from "../Firebase/auth.js";
import { feed } from "./feed.js";

export const register = () => {
    const viewRegisterHtml = document.getElementById("root");
    const view = `
        <div id="viewRegister">
          <a href="#/register"></a>
          <div>
          <img id="logoRes-signUp" src="/images/logo-ninja-signup-responsive.svg">
          </div>
            <div class="box-form">
              <form id="form-register" action="">
                  <label class="labels" for="">Nombre</label>
                  <input class="inputs" id="nameRegister" type="text" required>
                  <label class="labels" for="">Apellido</label>
                  <input class="inputs" id="lastNameRegister" type="text" required>
                  <label class="labels" for="">Correo Electrónico</label>
                  <input class="inputs" id="emailRegister" type="email" placeholder="ejemplo@gmail.com" required>
                  <label class="labels" for="">Contraseña</label>
                  <input class="inputs" id="passwordRegister" type="password" required>
                <section id="alertMessage">
                  <p id="errorMessage"></p>
                </section>
                <section class="align-buttons">
                        <p id="guide-button">¿Ya tienes cuenta?</p>
                        <button id="btn-login" class="btn-border">INICIAR SESIÓN</button>
                        <button id="btn-register" class ="btn-background" type="submit">REGISTRAR CUENTA</button>
                </section>
                <section id="register-google">
                <h3>o registrate con:</h3> 
                <a href=""><img id="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
                </section>
              </form>
            </div>
        </div>
    `;
    viewRegisterHtml.innerHTML = view;

    document.querySelector("#logoRes-signUp").addEventListener("click", () => {
        n;
        window.location.hash = "/";
    });
    document.querySelector("#btn-login").addEventListener("click", () => {
        window.location.hash = "/login";
    });

    const formRegister = document.querySelector("#form-register");
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameRegister = document.querySelector("#nameRegister").value;
        const lastNameRegister = document.querySelector("#lastNameRegister").value;
        const emailRegister = document.querySelector("#emailRegister").value;
        const passwordRegister = document.querySelector("#passwordRegister").value;
        formRegister.reset();

        /*  console.log(
           nameRegister,
           lastNameRegister,
           emailRegister,
           passwordRegister
         ); */

        registerUser(emailRegister, passwordRegister)
            .then(response => {
                changeView("#/feed")
                console.log("registro exitoso :)");
                // console.log(response);
            })
            .catch((error) => {
                console.log("error");
                const codeError = error.code;
                const messageError = document.querySelector('#errorMessage');
                switch (codeError) {
                    case 'auth/email-already-in-use':
                        messageError.innerHTML = "Este correo ya está registrado";
                        break;
                    case 'auth/weak-password':
                        messageError.innerHTML = "La contraseña debe tener mínimo 6 caracteres";
                        break;
                    default:
                        break;
                }
            })
    });
    return viewRegisterHtml;
}