import { changeView } from "../view-controler/controler.js";

export const register = () => {
  const viewRegisterHtml = document.getElementById("root");
  const view = `
        <div id="viewRegister">
            <a href="#/register"></a>
            <form action="">
                <label for="">Nombre</label>
                <input id="nameRegister" type="text">
                <label for="">Apellido</label>
                <input id="lastNameRegister" type="text">
                <label for="">Correo Electrónico</label>
                <input id="emailRegister" type="email" placeholder="ejemplo@gmail.com">
                <label for="">Contraseña</label>
                <input id="passwordRegister" type="password">
             <h3>o registrate con: </h3> 
             <a href=""><img src="/imagenes/simbolo-de-google.png" alt="Google"></a>
            </form>
            <section>
                <p>¿Ya tienes cuenta?</p>
                <button id="btn-login">Iniciar Sesión</button>
                <button id="btn-register">Registrar Cuenta</button>
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
