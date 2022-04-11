import {loginUser} from '../view-controler/firebase.js';
import {changeView} from '../view-controler/router.js';

export default () => {
  const viewHome = `
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
<div class="button-group">
<button type="submit" class=ingress id=ingress>Sing in</button>
</div>

    <div class="button-group">
    <button type="submit" class="btn-google" id="btn-google">connect  with Google
    <img class="img-google"     src="img/google.png" alt="btn-google">
    </button>
    </div>
<div class="button-group">
<button type="button" class=create id=create>Create your account</button>
</div>
</form>
    `;

   //creación de elemento
  const divElement = document.createElement("div");
  divElement.className="div-login";
  divElement.innerHTML = viewHome;

 //Selectores del Dom
  const ingressButton = divElement.querySelector("#ingress");
  const createButton=divElement.querySelector("#create");
  const googleButton=divElement.querySelector("#btn-google");


  //Eventos 
  ingressButton.addEventListener("click", () => {
    const passwordUser = divElement.querySelector("#passwordUser").value;
    const emailUser= divElement.querySelector("#emailUser").value;
    
    loginUser(emailUser, passwordUser);
    changeView("#/timeLine")
  });
  createButton.addEventListener("click" , () =>{
  changeView("#/register")
  });
return divElement;
};

