//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//
import { db} from '../firebaseInit.js';
import {  } from '../firebaseController.js';

export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
  <header id='banner'>
    <img id='Banner_img' src='./img/title.png'>
  </header>
    <main>
      <div id='modal_post-container' class="post-container">
        <div id='modal_header'>
          <img id='user_img' src='./img/Icono_Harry.png'>
          <div id='name-container'></div>
        </div>
        <div id='line'>
          <div id='text-container'>
            <textarea type='text' id='input-post' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button disabled type='button' id='btn-post' class='btn-post-inactive'></button>  
      </div>
      <div id='post-container' class="post-container">        
      </div>       
    </main>
    <footer id='create-post'>
      <img id='footer_img' src='./img/Footer.png'>
    </footer>
    `;
  divDaily.innerHTML = viewDaily;



  return divDaily;
};
