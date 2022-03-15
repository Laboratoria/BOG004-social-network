export default () => {
    const viewRegister = `
    <div class="contenedor-register"
      
      <div class="navbar">
        <button class="atras">
        <a href="#/"> <img clas="img-atras" src="../img/icono_atras.png" alt="Atrás"> </a>
        </button>
      </div>

      <div class="logo-formulario">
        <img src="../img/Logo-codering.png" alt="Logo Codering">
      </div>

      <form id="formularioRegister">
        <label>Correo electrónico</label>
        <input type="email" id="correoRegister" class="formulario"></input>
        <label>Usuario</label>
        <input type="text" id="usuarioRegister" class="formulario"></input>
        <label>Contraseña</label>
        <input type="password" id="contraseñaRegister" class="formulario"></input>
        <button type="submit" class="botones">REGISTRARME</button>
      </form>

      <div class="separador">
        <img src="../img/separador1.png" alt="Separador">
      </div>

      <div class="gyf-register">
        <button type="submit" class="boton-gyf">
        <img src="../img/google.png" alt="Google"> Registrarme con Google</button>
        <button type="submit" class="boton-gyf">
        <img src="../img/facebook.png" alt="Facebook"> Registrarme con Facebook</button>
      </div>
    </div>

    `;
  
    const divElemt = document.createElement('div');
    // divElemt.classList.add('position')---> hay que ver si lo usamos
    divElemt.innerHTML = viewRegister;

    const formularioRegister = divElemt.querySelector('#formularioRegister');
      formularioRegister.addEventListener('submit',(e) => {
      e.preventDefault();
        const email = divElemt.querySelector('#correoRegister').value;
        const user = divElemt.querySelector('#usuarioRegister').value;
        const password = divElemt.querySelector('#contraseñaRegister').value;

        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
        
        const auth = getAuth(email,user,password);

        auth
          .createUserWithEmailAndPassword(email,user,password)
          .then((userCredential) => {
            console.log('registrando')
          })
          // .catch((error) => {
          //   const errorCode = error.code;
          //   const errorMessage = error.message;
          //   // ..
          // });

      console.log(correoRegister, usuarioRegister, contraseñaRegister);
    });

    return divElemt;
};



