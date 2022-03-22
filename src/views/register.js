export default () => {
  const viewRegister = `
  <div class="container">
    <div class="gridHeader">
      <img src="img/Logo.svg" alt="Logo" class="logo" />
      <h1 class="tittle">EcoTraveler</h1>
    </div>
    <div class="gridBody">
      <input class="inputStyle" id="inputEmail" type="text" placeholder="Correo Electrónico">
      <input class="inputStyle" id="inputPassword" type="text" placeholder="Contraseña">
      <button class="btnLogin">Ingresar</button>
      <h3 class="textGoogle">Iniciar sesión con google</h3>
      <img src="img/google-logo.svg" alt="googleLogo" class="googleLogo">
    </div>
    <div class="gridRegister">
      <h3 class="textAccount">¿Aún no tienes cuenta?</h3>
      <button class="btnRegister" id="createAccount"><a href="#/createAccount">Regístrate</a></button>
    </div>
  </div>`;

  const divRegister = document.createElement("div");
  divRegister.innerHTML = viewRegister;

  return divRegister;
};

