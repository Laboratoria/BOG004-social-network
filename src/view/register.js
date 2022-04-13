import { changeView } from "../view-controler/controler.js";
import { registerUser } from "../Firebase/auth.js";
import { feed } from "./feed.js";
import { googleUser } from "../Firebase/auth.js";
import { GoogleAuthProvider } from "../Firebase/firebase-import.js";

export const register = () => {
    const viewRegisterHtml = document.getElementById("root");
    const view = `
        <div id="viewRegister">
          <a href="#/register"></a>
          <div>
          <img id="logoRes-signUp" src="./images/logo-ninja-signup-desktop.svg">
          </div>
            <div class="box-form">
              <form id="form-register" action="">
                <div class="box-input">
                  <label class="labels" for="">Nombre</label>
                  <input class="inputs" id="nameRegister" type="text" required>
                </div>
                <div class="box-input">
                  <label class="labels" for="">Apellido</label>
                  <input class="inputs" id="lastNameRegister" type="text" required>
                </div>
                <div class="box-input">
                  <label class="labels" for="">Correo Electrónico</label>
                  <input class="inputs" id="emailRegister" type="email" placeholder="ejemplo@gmail.com" required>
                </div>
                <div class="box-input">
                  <label class="labels" for="">Contraseña</label>
                  <input class="inputs" id="passwordRegister" type="password" placeholder="Debe contener más de 6 caracteres" required>
                </div>
                <section id="alertMessage" class="center-message">
                  <p id="errorMessage"></p>
                </section>
                <section class="align-buttons">
                        <p id="guide-button">¿Ya tienes cuenta?</p>
                        <button id="btn-login" class="btn-border">INICIAR SESIÓN</button>
                        <button id="btn-register" class ="btn-background" type="submit">REGISTRAR CUENTA</button>
                </section>
                <section id="register-google">
                <h3>O registrate con:</h3> 
                <a href=""><img class="btn-icon" src="./images/simbolo-de-google.png" alt="Google" id="icongoogle"></a>
                </section>
              </form>
            </div>
        </div>
    `;
    viewRegisterHtml.innerHTML = view;

    document.querySelector("#logoRes-signUp").addEventListener("click", () => {
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

        registerUser(emailRegister, passwordRegister)
            .then((response) => {
                changeView("#/login");
                console.log("registro exitoso :)");
            })
            .catch((error) => {
                console.log("error");
                const codeError = error.code;
                const messageError = document.querySelector("#errorMessage");
                switch (codeError) {
                    case "auth/email-already-in-use":
                        messageError.innerHTML = "Este correo ya está registrado";
                        break;
                    case "auth/weak-password":
                        messageError.innerHTML =
                            "La contraseña debe tener mínimo 6 caracteres";
                        break;
                    default:
                        break;
                }
            });
    });

    document.querySelector("#icongoogle").addEventListener("click", (e) => {
        e.preventDefault();
        googleUser()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                changeView("#/login");
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    });
    return viewRegisterHtml;
}