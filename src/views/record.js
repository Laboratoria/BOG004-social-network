export default () => {
  const viewRecord = `  
    <section id="record-user">
    <div class="section-left">
    <img src="img/logo.png" alt="logo-mommi" class="logo-mommi">
    <h1 class="welcome-text">Te damos la bienvenida a mommi</h1>
    <h2 class="slogan">Maternidad y crianza</h2>

    <form onsubmit="return false;" class="form-validation">

    <input id="registerName" type="text" placeholder="Ingrese sus Nombres y Apellidos" class="btn input-validation">

    <input id="registerUsername" type="text" placeholder="Ingrese su correo electrónico" class="btn input-validation">

    <input id="registerPassword" type="password" placeholder="Ingrese su contraseña" class="btn input-validation">


      <button id="registerBtn" class="btn btn-record">Registrarse</button>

      <div id="id-message-error-record" class="message-error">
            
      </div>

      <button id="googleBtn" class ="btn btn-continue-with btn-goo">
        <img src="img/google.png" alt="google">
        Continuar con Google
      </button>

      <p>¿Ya eres miembro? <a href="#login">Iniciar sesión</a></p>

    </form>
    </div>

    <div class="section-picture-picture">
    <img src="img/picturemom.png" alt="logo-mommi" class="poster-mommi">
    </div>
        </section> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRecord;
  return divElement;
};
