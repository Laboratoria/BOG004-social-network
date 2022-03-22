export const wall= ()=>{
    const divElement = document.createElement('div'); 
    const template = `
     <header>
     <img src='image/logo2.png' alt='social-trip-png' class = 'logo-W'>
     </header>
     <section class='post'>
     <form id='formpost' class='formpost' autocomplete='off'> 
     <label for='post'>Usuario</label>
     <textarea id='post' rows='4'maxlength='150' placeholder='Comparte tu Experiencia'></textarea>
     </form> 
     <button  type='submit' id='btnpost'>Publicar</button>
     </section>`;
     // aqui tu codigo
    
     divElement.classList.add('view4');
     divElement.innerHTML = template;

     const buttonPost= divElement.querySelector('#btnpost')
     buttonPost.addEventListener('submit', ()=>{
         console.log(savePost(post))
     })

    
     return divElement;

}