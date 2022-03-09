export const routes = [{
        path: '/',
        template: '<h1>Página en construcción </p>',
    },
    {
        path: '/registro',
        template: `<div class="container-form">
      <form class="form" action="" method="post">
        <p>BIENVENIDO</p>
        <input type="text" placeholder="Nombre y Apellido" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit" id="btn-register">Registrarse</button>
      </form>
    </div>
    <p id="btnSignInGoogle">
     Registrate con
   <i class="fa-brands fa-google"></i>
    </p>
  `,
    },
];