export default () => {
  const viewRegister = `
      <img src="img/Logo.svg" alt="Logo" class="logo" />
  <h1 class="tittle">Ecotraveler</h1>

  <input type="text" placeholder="E-mail">
  <input type="text" placeholder="Password">
  <button class="btnLogin">Ingresar</button>
  <h3 class="textGoogle">Iniciar sesión con google</h3>
  <img src="img/google-logo.svg" alt="googleLogo" class="googleLogo">
  <h3 class="textAccount">¿Aún no tienes cuenta?</h3>
  <button class="btnRegister">Regístrate</button>`;

  const divRegister = document.createElement("div");
  divRegister.innerHTML = viewRegister;

  return divRegister;
};
