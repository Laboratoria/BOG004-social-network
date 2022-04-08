import { authenticate, loginUser } from "../view-controler/firebaseControle.js";
import {changeView} from '../view-controler/router.js';
import { auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, }
   from '../view-controler/firebase.js'

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

//<div id='errorMessage'></div>
</ul>
    `;

  const divElement = document.createElement("div");
  //aquí se debe crear una clase al div //
  divElement.innerHTML = viewRegister;
  const registerButton = divElement.querySelector("#SingUp");
  registerButton.addEventListener("click", () => {
    
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#ingressPassword").value;
    //const confirmPassword = divElement.querySelector("#confirmPassword").value;
    //const errorMessage = divElement.querySelector ('#errorMessage');
    //errorMessage.innerHTML = '';
    
    authenticate(email, password)
    .then((userCredential) => {

      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


    //loginUser(email, password)
    //.then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      // ...
    //})
    //.catch((error) => {
      //const errorCode = error.code;
      //const errorMessage = error.message;
    //});

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
  