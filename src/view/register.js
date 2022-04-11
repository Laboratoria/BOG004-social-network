import { authenticate } from "../view-controler/firebaseControle.js";


export default () => {
  const viewRegister = `
    <h2 class= 'title-register'> ¡Here you can register!</h2>
  
<form action="" class="form-register">
<div> 
<label for="name" class="text-register">Nombre</label>
<input type="text" id="name" name="name">
</div>
<div> 
<label for="lastName" class="text-register">Apellido</label>
<input type="text" id="lastName" name="lastName">
</div>
<div> 
<label for="email"  class="text-register">Correo Electrónico</label>
<input type="email" id="email" name="email">
</div>
<div> 
<label for="ingressPassword"  class="text-register">Contraseña nueva</label>
<input type="password" id="ingressPassword" name="ingressPassword">
</div>
<div> 
<label for="confirmPassword"  class="text-register">Confirme su contraseña</label>
<input type="password" id="confirmPassword" name="confirmPassword">
</div>
<div> 
<label for="gender"  class="text-register">Genero</label>
<select id="gender" name="gender"  class="text-register">
<option value="zero"></option>
<option value="Feminine">Femenino</option>
<option value="Male">Masculino</option>
<option value="Other">Otro</option>
</div>
</select>

<div>
<label for="birth" class="text-register">Fecha de Nacimiento</label>
<input type="date" id="birth" name="birth">
</div>

<div class="button">
<button type="submit" class="SingUp" id="SingUp">Registrate</button>
</div>

//<div id='errorMessage'></div>
</ul>
    `;

  const divElement = document.createElement("div");
  //aquí se debe crear una clase al div //
  divElement.innerHTML = viewRegister;
  const registerButton = divElement.querySelector("#SingUp");
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#ingressPassword").value;
    //const confirmPassword = divElement.querySelector("#confirmPassword").value;
    //const errorMessage = divElement.querySelector ('#errorMessage');
    //errorMessage.innerHTML = '';

    authenticate(email,password);
  
  })
  console.log(divElement)
  return divElement;
};
  


  //autenticar datos para el registro
//function authenticate (email, password){
  //console.log(email, password)
//const auth= getAuth();
//createUserWithEmailAndPassword(auth, email, password)
  
  //}

  //usuario existente
  //function loginUser  (email, password) {
//const auth = getAuth();
//signInWithEmailAndPassword(auth, email, password)

//authenticate(email, password, user)
     //loginUser(email, password)
     //changeView("#/timeLine")
  