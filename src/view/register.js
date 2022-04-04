import { authenticate } from "../view-controler/firebase.js";
import {changeView} from '../view-controler/router.js';

export default () => {
  const viewRegister = `
    <h2 class= 'text-center'> Aquí te puedes registrar en ¡Hi,baby! </h2>
    
    <ul>

<div> 
<label for="name">Nombre</label>
<input type="text" id="name" name="name">
</div>
<div> 
<label for="lastName">Apellido</label>
<input type="text" id="lastName" name="lastName">
</div>
<div> 
<label for="email">Correo Electrónico</label>
<input type="email" id="email" name="email">
</div>
<div> 
<label for="ingressPassword">Contraseña nueva</label>
<input type="password" id="ingressPassword" name="ingressPassword">
</div>
<div> 
<label for="confirmPassword">Confirme su contraseña</label>
<input type="password" id="confirmPassword" name="confirmPassword">
</div>
<div> 
<label for="gender">Genero</label>
<select id="gender" name="gender">
<option value="zero"></option>
<option value="Feminine">Femenino</option>
<option value="Male">Masculino</option>
<option value="Other">Otro</option>
</div>
</select>

<div>
<label for="birth">Fecha de Nacimiento</label>
<input type="date" id="birth" name="birth">
</div>

<div class="button">
<button type="submit" class="SingUp" id="SingUp">Registrate</button>
</div>
</ul>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewRegister;
  const registerButton = divElement.querySelector("#SingUp");

  registerButton.addEventListener("click", () => {
    const password = divElement.querySelector("#ingressPassword").value;
    const email = divElement.querySelector("#email").value;

    authenticate(email, password);

    changeView("#/timeLine")
  });
  return divElement;
};
