import { changeView } from "../view-controler/controler.js";
import { loginUser } from "../Firebase/auth.js";
import { googleUser } from "../Firebase/auth.js";
import { GoogleAuthProvider } from "../Firebase/firebase-import.js";

export const login = () => {
    const viewLoginHtml = document.getElementById("root");
    const view = `
    <div id="viewLogin">
        <a href="#/login"></a>
        <div>
            <img id="logoRes-signUp" src="./images/logo-ninja-signup-responsive.png">
        </div>
        <div class="box-form">
            <form id="form-login" action="">
              <div class="box-input">
                <label class="labels" for="email">Ingresa tu correo registrado</label>
                <input class="inputs" id= "email-login" type="email" placeholder="ejemplo@gmail.com" required>
              </div>
              <div class="box-input">
                <label class="labels" for="password">Contraseña</label>
                <input class="inputs" id= "password-login" type="password" required>
              </div>
              <section id="alertMessageLogin" class="center-message">
                <p id="errorMessageLogin"></p>
              </section>
              <section class="align-buttons">
                <p id="guide-button-signUp">¿Eres un usuario nuevo?</p>
                <button id="btn-register-signUp" class="btn-border">REGÍSTRATE</button>
                <button id="btn-feed" class="btn-background" type="submit">INGRESAR</button>
              </section>
              <section id="signUp-google">
                <h3>O ingresa con: </h3> 
                <a href=""><img class="btn-icon" src="./images/simbolo-de-google.png" id="icongooglelogin" alt="Google"></a>
              </section>
            </form>
        </div>            
    </div>
    `;
    viewLoginHtml.innerHTML = view;

    document.querySelector("#logoRes-signUp").addEventListener("click", () => {
        window.location.hash = "/";
    });

    document.querySelector("#btn-register-signUp").addEventListener("click", () => {
        window.location.hash = "/register";
    });

    const formLogin = document.querySelector("#form-login");
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailLogin = document.querySelector("#email-login").value;
        const passwordLogin = document.querySelector("#password-login").value;
        formLogin.reset();
        console.log(emailLogin);

        loginUser(emailLogin, passwordLogin)
            .then(response => {
                changeView("#/feed")
                console.log(response);
                localStorage.setItem("userInfo", JSON.stringify(response.user))
            })
            .catch((error) => {
                console.log("error");
                const codeError = error.code;
                const messageError = document.querySelector('#errorMessageLogin');
                switch (codeError) {
                    case 'auth/user-not-found':
                        messageError.innerHTML = "El usuario con este correo no esta registrado";
                        break;
                    case 'auth/wrong-password':
                        messageError.innerText = 'Contraseña incorrecta';
                        break;
                    default:
                        break;
                }
            });
    });
    document.querySelector("#icongooglelogin").addEventListener("click", (e) => {
        e.preventDefault();
        googleUser()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                changeView("#/feed");
                localStorage.setItem("userInfo", JSON.stringify(result.user));
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

    return viewLoginHtml;
}