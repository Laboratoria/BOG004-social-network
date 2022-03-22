import { changeView } from '../view-controler/controler.js'

export const login = () => {
    const viewLoginHtml = document.getElementById("root");
    const view = `
    <div id="viewLogin">
        <a href="#/login"></a>
        <div>
            <img id="logoRes-signUp" src="/images/logo-ninja-signup-responsive.svg">
        </div>
        <div class="box-form">
            <form id="form-login" action="">
                <label class="labels" for="email">Ingresa tu correo registrado</label>
                <input class="inputs" id= "email" type="email" placeholder="ejemplo@gmail.com" required>
                <label class="labels" for="password">Contraseña</label>
                <input class="inputs" id= "password" type="password" required>
                <section class="align-buttons">
                    <div class="question-button">
                        <p>¿Eres un usuario nuevo?</p>
                        <button id="btn-register-signUp" class="btn-border">REGÍSTRATE</button>
                    </div>
                    <button id="btn-feed" class="btn-background" type="submit">INGRESAR</button>
                </section>
                <h3>o ingresa con: </h3> 
                <a href=""><img class="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
            </form>
        </div>  
    </div>
    `;
    viewLoginHtml.innerHTML = view;
    document.querySelector("#btn-feed").addEventListener("click", () => {
        //Recordar cambiar la ruta cuando realicemos el template del muro de la aplicación
        window.location.hash="/";
    });

    document.querySelector("#btn-register-signUp").addEventListener("click", () => {
        window.location.hash="/register";
    });

    return viewLoginHtml;
};