import { savePost } from "../Configfirebase/firestore.js";
import { userActive } from "../Configfirebase/Authentication.js";
import { submithandler } from "../Configfirebase/Authentication.js"; 


export const wall= ()=>{
    const divElement = document.createElement('div'); 
    const template = `
     <header>
     <img src='image/logo2.png' alt='social-trip-png' class = 'logo-W'>
     </header>
     <section class='post'>
     <form id='formpost' class='formpost' autocomplete='off'> 
        <label for='post' id='nameuser'> </label>
        <textarea id='post' rows='4'maxlength='150' placeholder='Comparte tu Experiencia'></textarea>
        <button  type='submit' id='btnpost'>Publicar</button>
     </form> 
     </section>`;
     // aqui tu codigo
    
     divElement.classList.add('view4');
     divElement.innerHTML = template;

     const formPost= divElement.querySelector('#formpost')
     const descripcion = divElement.querySelector('#post')
     const name = divElement.querySelector('#nameuser')
     name.innerHTML= submithandler(username.value)
     console.log(name);
     



     formPost.addEventListener('submit', (e)=>{
        e.preventDefault();

         console.log ('holi', descripcion.value);
         savePost(descripcion.value)
            .then((data) => {
                console.log('Holaaaaaaa', data)
                return 'Chao'
            })
            .catch((error) => console.log(error));
      formPost.reset();
     })

     
     

     return divElement;
     
}
