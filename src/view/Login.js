import {loginUser, loginGoogle,} from '../view-controler/firebaseControle.js';
import {changeView} from '../view-controler/router.js';


export default () => {
  const viewLogin = `
    <h2 class= 'title-login'>¡Welcome!</h2>
  <form action="">
<div class="container-icon">
 <i class="fa-solid fa-user" aria-hidden="true"></i>
<input type="text" class="text-login" placeholder=" Username or email" id="emailUser" name="emailUser">
</div>
<div class="container-icon">
<i class="fa-solid fa-lock"></i>
<input type="password"  class="text-login" placeholder="Password" id="passwordUser" name="passwordUser">
</div>
<div>
<button type="submit" class=ingress id=ingress>Sing in</button>
</div>

    <div >
    <button type="submit" class="btn-google" id="btn-google">connect  with Google
    <img class="img-google"     src="img/google.png" alt="btn-google">
    </button>
    </div>
<div>
<button type="button" class=create id=create>Create your account</button>
</div>
</form>
    `;
    
   //creación de elemento
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLogin;

 //Selectores del Dom
  const ingressButton = divElement.querySelector("#ingress");
  const createButton=divElement.querySelector("#create");
  const googleButton=divElement.querySelector("#btn-google");


  //Eventos 
  ingressButton.addEventListener("click", () => {
    const passwordUser = divElement.querySelector("#passwordUser").value;
    const emailUser= divElement.querySelector("#emailUser").value;
    
    loginUser(emailUser, passwordUser);
    
  });

  createButton.addEventListener("click" , () => {
  changeView("#/register")
  });

   googleButton.addEventListener("click", () => {
  loginGoogle ();
  });

  return divElement;
  
};


