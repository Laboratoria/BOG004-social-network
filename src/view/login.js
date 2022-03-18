import { auth, newLogin, provider, googlePopUp } from "../FirebaseConfig.js";

export default () => {
  const viewLogin = `
    <div class="contenedor-register">
      
      <div class="navbar-pantalla2">
        <button class="atras">
        <a href="#/"> <img clas="img-atras" src="../img/icono_atras.png" alt="Atrás"> </a>
        </button>
      </div>

      <div class="logo-login">
        <img src="../img/Logo-codering.png" alt="Logo Codering">
      </div>

      <form id="formularioLogin">
        <label>Correo electrónico</label>
        <input type="email" id="correoLogin" class="formulario"></input>
        <label>Contraseña</label>
        <input type="password" id="contraseñaLogin" class="formulario"></input>
        <button type="submit" class="botones">INICIAR SESIÓN</button>
      </form>

      <div class="separador-login">
        <img src="../img/separador2.png" alt="Separador">
      </div>

      <div class="gyf-login">
        <button type="submit" class="boton-gyf" id="btnGoogle">
        <img src="../img/google.png" alt="Google"> Iniciar sesión con Google</button>
        <button type="submit" class="boton-gyf">
        <img src="../img/facebook.png" alt="Facebook"> Iniciar sesión con Facebook</button>
      </div>
    </div>

  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;
  const formularioLogin = divElemt.querySelector('#formularioLogin');
  formularioLogin.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = divElemt.querySelector('#correoLogin').value;
    const password = divElemt.querySelector('#contraseñaLogin').value;
    formularioLogin.reset();
    newLogin(auth, email, password)
    .then((userCredential) => {
      console.log('logueado...');
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      alert('Por favor verifique sus credenciales')
    });
  })
  const btnGoogle= divElemt.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', (e) =>{
    e.preventDefault();
    // const auth = getAuth();
    googlePopUp(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('logueado con google')
      }).catch((error) => {
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
  
  return divElemt;
};
