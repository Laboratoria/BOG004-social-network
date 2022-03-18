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
  <!-- <img class="logout" src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646691233/salir-removebg-preview_xhlcfd.png" alt="logout" /> -->
  <div>
    <a href="#"><i class="fa-solid fa-user fa-3x"><p>Perfil</p></i> </a>
    <a href="#"><i class="fa-solid fa-paw fa-3x"><p>Post</p></i> </a>
    <!-- <a href="#"><i class="fa-solid fa-circle-chevron-up fa-3x"><p>Post</p></i> </a> -->
    <a href="#"><i class="fa-solid fa-magnifying-glass fa-3x"><p>Buscar</p></i> </a>
  </div>
</header>
    <img class='img-construccion' src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1647092472/descarga_dxdene.jpg' >
    
    <footer>
      <a href="#"><i class="fa-solid fa-user"></i> </a>
      <a href="#"><i class="fa-solid fa-paw"></i> </a>
      <!-- <a href="#"><i class="fa-solid fa-circle-chevron-up"></i></a> -->
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i> </a>
    </footer>`,
  script: () => {},

};
