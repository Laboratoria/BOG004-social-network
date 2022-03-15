export default () => {
  const viewRecord = `  
    <section id="record-user">
    <div class="section-left">
<img src="img/logo.png" alt="logo-mommi" class="logo-mommi">
<h1 class="welcome-text">Te damos la bienvenida a mommi</h1>
<h2 class="slogan">Maternidad y crianza</h2>

<form action="" method="" class="form-validation">

  <input type="text" placeholder="Ingrese su correo electrónico" class="btn input-validation"><br>
  <input type="password" placeholder="Ingrese su contraseña" class="btn input-validation">

  <button class="btn btn-record">Registrarse</button>

  <p>O</p>

  <button class="btn btn-continue-with btn-goo">
    <img src="img/google.png" alt="google">
    Continuar con Google
  </button>

  <button class="btn btn-continue-with btn-face">
    <img src="img/facebook.png" alt="facebook">
    Continuar con Facebook
  </button>

  <p>¿Ya eres miembro? Iniciar sesión</p>

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
