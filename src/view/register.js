import { auth, newRegister } from "../FirebaseConfig.js";

export default () => {
  const viewRegister = `
    <div class="contenedor-register">
      
      <div class="navbar-pantalla">
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
        <label>Contraseña</label>
        <input type="password" id="contraseñaRegister" class="formulario"></input>
        <button type="submit" class="botones">REGISTRARME</button>
      </form>
    `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;
  const formularioRegister = divElemt.querySelector('#formularioRegister');
  formularioRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divElemt.querySelector('#correoRegister').value;
    const password = divElemt.querySelector('#contraseñaRegister').value;
    formularioRegister.reset();

    newRegister(auth, email, password)
    .then((userCredential) => {
      console.log('registrado');
      const user = userCredential.user;
      alert('Usuario registrado exitosamente')
    })
    .catch((error) => {
      alert('Usuario ya existe, por favor intente nuevamente')
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
  });

  return divElemt;
};
