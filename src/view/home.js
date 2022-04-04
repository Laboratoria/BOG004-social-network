import {loginUser} from '../view-controler/firebase.js';
import {changeView} from '../view-controler/router.js';

export default () => {
  const viewHome = `
    <h2 class= 'title-login'>¡Welcome, ¡Hi,baby!</h2>
  <form action="">
<div>
<input type="text" class="text-login"  placeholder="Username or email" id="emailUser" name="emailUser">
</div>
<div>
<input type="password"  class="text-login" placeholder="Password" id="passwordUser" name="passwordUser">
</div>
<div class="button">
<button type="submit" class=ingress id=ingress>Sing in</button>
</div>
<div class="button">
<button type="button" class=create id=create>Creat your account</button>
</div>
</form>
    `;

   //creación de elemento
  const divElement = document.createElement("div");
  divElement.innerHTML = viewHome;

 //Selectores del Dom
  const ingressButton = divElement.querySelector("#ingress");
  const createButton=divElement.querySelector("#create");


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

