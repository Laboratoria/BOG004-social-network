export default () => {
    const viewAccount = `
    <div class="container">
      <div class="gridHeaderAccount">
        <img src="img/Logo.svg" alt="Logo" class="logoAccount" />
        <h1 class="tittleAccount">EcoTraveler</h1>
      </div>
      <div class="gridBodyAccount">
        <input class="inputStyle" id="inputName" type="text" placeholder="Nombre y Apellido">
        <input class="inputStyle" id="inputE" type="text" placeholder="Correo Electrónico">
        <input class="inputStyle" id="inputBirthdate" type="text" placeholder="Fecha de Nacimiento">
        <input class="inputStyle" id="inputPassword" type="text" placeholder="Contraseña">
        <input class="inputStyle" id="inputConfirm" type="text" placeholder="Confirmar Contraseña">
        <button class="btnRegister" id="viewWall"><a href="#/ecoTraveler">Regístrate</a></button>
      </div>
    </div>`;

    const divAccount = document.createElement('div')
    divAccount.innerHTML = viewAccount;

    return divAccount;
    
}