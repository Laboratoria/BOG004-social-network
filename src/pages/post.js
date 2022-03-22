// import { router } from '../router.js';

export default {
  path: '#post',
  template: `
  <header class="nav-bar">
  <img
    class="logo-mobile"
    src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png"
    alt="pawslogo"
  />
  <div>
    <a href="#"><i class="fa-solid fa-user fa-3x"><p>Perfil</p></i> </a>
    <a href="#"><i class="fa-solid fa-paw fa-3x"><p>Post</p></i> </a>
    <!-- <a href="#"><i class="fa-solid fa-circle-chevron-up fa-3x"><p>Post</p></i> </a> -->
    <a href="#"><i class="fa-solid fa-magnifying-glass fa-3x"><p>Buscar</p></i> </a>
  </div>
</header>

<div class='container-publicar'>
<div class='container-post'>
<textarea class='form-publicar'></textarea>
<div class='option-post'>
<i class="fa-solid fa-paperclip"></i>
<input class='attachment'type='file'></input>
<button type='button' id='btn-publicar'>Publicar</button>
</div>
</div>
</div>

    <footer>
      <a href="#"><i class="fa-solid fa-user"></i> </a>
      <a href="#"><i class="fa-solid fa-paw"></i> </a>
      <!-- <a href="#"><i class="fa-solid fa-circle-chevron-up"></i></a> -->
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i> </a>
    </footer>`,
  script: () => {
    const btnAttachment = document.querySelector('.fa-paperclip');
    const inputAttachment = document.querySelector('.attachment');

    btnAttachment.addEventListener('click', () => {
      inputAttachment.click();
    });
  },
};
