import { changeView } from "../view-controler/controler.js";

export const register = () => {
    const viewRegisterHtml = document.getElementById("root");
    const formRegister = document.querySelector('#form-register');
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
                <section class="align-buttons">
                    <div class="question-button">
                        <p>¿Ya tienes cuenta?</p>
                        <button id="btn-login" class="btn-border">INICIAR SESIÓN</button>
                    </div>
                    <button id="btn-register" class ="btn-background" type="submit">REGISTRAR CUENTA</button>
                </section>
              </form>
              <h3>o registrate con:</h3> 
              <a href=""><img class="btn-icon" src="/images/simbolo-de-google.png" alt="Google"></a>
            </div>
        </div>
    `;
    viewRegisterHtml.innerHTML = view;

    document.querySelector("#btn-login").addEventListener("click", () => {
        changeView("#/login");
    });

    //FUNCION PARA LLAMADO DE DATOS DE FORM REGISTER ---OJOOO NO SE SI SE INGRESARÍA AQUÍ
    //No esta funcionando pues con el controlador hay un break y retorna a la pantalla de hero
    formRegister.addEventListener('submit',(e)=> {
    e.preventDefault();
    const nameRegister = document.querySelector('#nameRegister').value;
    const lastNameRegister = document.querySelector('#lastNameRegister').value;
    const emailRegister = document.querySelector('#emailRegister').value;
    const passwordRegister = document.querySelector('#passwordRegister').value;
    console.log (nameRegister,lastNameRegister, emailRegister, passwordRegister);

    auth
        .createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
        .then((userCredential) => {
            //Borrar datos del formulario al crear un usuario
            formRegister.reset();
            // Signed in
            console.log("Sign Up registrado");
            //aqui debemos crear un redireccionamiento al feed o a una pantalla de confirmación de creación de cuenta cuando ya se ha creado una cuenta 
            //changeView("#/login"); 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    });
    return viewRegisterHtml;
};