//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//
import { createPost, getPost, readAllPost} from '../firebaseController.js'

export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
  <header id='banner'>
    <img id='Banner_img' src='./img/title.png'>
  </header>
  <main>
    <div id='modal-background'>
      <form id='modal_post-container' class="post-container">
        <div id='modal_header'>
          <img id='user_img' src='./img/Icono_Harry.png'>
          <div id='name-container'>Wizard</div>
          <i class="fa-solid fa-xmark" id="close"></i>
        </div>
        <div id='line'>
          <div id='text-container'>
            <textarea type='text' id='post-description' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button type='submit' id='btn-post-save' class='btn-post-inactive'>Save</button>  
      </form>
    </div>
    <div id='post-container' class="post-container">        
    </div>       
  </main>
  <footer id='create-post'>
    <button type='button' id='btn-post-create'>create +</button> 
  </footer>
  `;
  divDaily.innerHTML = viewDaily;

  const btnCreate = divDaily.querySelector('#btn-post-create');
  let background = divDaily.querySelector('#modal-background');
  let modalPost = divDaily.querySelector('#modal_post-container');
  const postDescription = divDaily.querySelector('#post-description'); //revisen esta vaina

  btnCreate.addEventListener('click', () => {
    console.log('Opened');
    background.style.display = 'flex';
    modalPost.style.display = 'block';
    postDescription.focus();
    postDescription.value = '';
    
  })

  // const modalForm = divDaily.querySelector('#modal_post-container');
  

  const formPublication = divDaily.querySelector('#modal_post-container');

  formPublication.addEventListener('submit', (e) => {
    e.preventDefault();
    const formPublicationContent = formPublication['post-description'];
    createPost(formPublicationContent.value);
    modalPost.reset();
    
  });

  
  const postController = () => {
    const postContainer = divDaily.querySelector('#post-container');
    const querySnapshot = getPost();
    //función para leer las publicaciones en tiempo real 
    querySnapshot.then((response) => {
       let postTemplate = '';
       response.forEach((doc) => {
       console.log(`${doc.id} => ${doc.data().postDescription}`);
       postTemplate += `
          <div id='post-container' class="post-container"> 
            <p>${doc.data().postDescription}</p>       
          </div>    
          `;
          
     });
     postContainer.innerHTML = postTemplate;
    });
    readAllPost(querySnapshot);
  };
  postController();


  
  //readPost();
  

  // const btnSave = divDaily.querySelector('#btn-post-save');
  // btnSave.addEventListener ('click', () => {
    

  // })



  // btnSave.addEventListener('click', (e) => {
  //   e.preventDefault()
  //   console.log('Saved');
  //   createPost(postDescription.value);
  //   modalPost.reset();
  // });


  // declaracion modalClose para evento de cierre de boton en version mobile
  let modalClose = divDaily.querySelector('#close'); 
  modalClose.addEventListener('click',()=>{
    console.log('Close');
    background.style.display= "none";
    modalPost.style.display= "";
  });


  // postDescription.addEventListener('keyup', () => { // evento del textarea
  //   const postContent = postDescription.value.trim();
  //   // trim() metodo que no permite activar boton con espacio
  //   if (postContent === '') {
  //     btnSave.disabled = true; // boton publicar inactivo
  //   } else {
  //     btnSave.disabled = false; // boton publicar activo
  //   }
  // });

  // const postController = () => {
  //   const postContainer = divDaily.querySelector('#post-container');
  //   const postData = readPost();
  //   console.log('postData: ', postData.length);
  //   postData.forEach(element => {
  //     console.log('ele', element)
      
  //   });
    
      // // let postStructure = '';
      // // snapShopResult.foreach((doc) => {
      // //   //const post= doc.data();
      //   postStructure += `
      //   <div id='post-container' class="post-container"> 
      //     <p>${post.postDescription}</p>       
      //   </div>    
      //   `;
      // });
    //   postContainer.innerHTML = postStructure.join("");
    // });  
    // readPost();
  // };
  // postController();
  
  
  return divDaily;
};

