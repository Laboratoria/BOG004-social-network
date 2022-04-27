import { authenticate } from "../view-controler/firebaseControle.js";

export default () => {
  const viewRegister = `
    <h2 class= 'title-register'> ¡Llena todos los campos!</h2>
<section class="form-register"
<form action="" class="form-register">
<div> 
<input type="text" for="name" class="text-register" id="name" name="name" placeholder="Ingrese tu nombre">
</div>
<div> 
<input type="text" for="lastName" class="text-register" id="lastName" name="lastName" placeholder="Ingrese tu apellido">
</div>
<div> 
<input type="email" for="email"  class="text-register" id="email" name="email" placeholder="Ingrese tu correo electronico">
</div>
<div> 
<input type="password"  for="ingressPassword"  class="text-register"id="ingressPassword" name="ingressPassword" placeholder="Crea una contraseña">
</div>
<div> 
<input type="password" for="confirmPassword"  class="text-register" id="confirmPassword" name="confirmPassword" placeholder="Repite la contraseña">
</div>
</div>
<div class="message--text"></div>
</form>
<div class="button">
<button type="submit" class="SingUp" id="SingUp">Registrate</button>
</div>
</form>
</section>
    `;
// Creación de elementos y selectores del DO; 
  const divElement = document.createElement("div");
  divElement.innerHTML = viewRegister;
  divElement.className = "container-register";
  const registerButton = divElement.querySelector("#SingUp");
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#ingressPassword").value;

    authenticate(email, password);
  });
  console.log(divElement);
  return divElement;
};
