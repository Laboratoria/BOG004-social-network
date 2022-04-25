import { changeView  } from "../src/view-controler/router.js";

const template = {
  Login : '<p>template login</p>',
  register: '<p>template register</p>'
}


describe('chengeView', () => {
  it('debería pintar el template Login cuando la ruta sea #/login', () => {  
    document.body.innerHTML= '<section id="container"></section>'
   
    changeView('#/login', 'template')

    expect(document.getElementById("container")).toEqual(template.Login);
  });
});


/*describe('casos de prueba de registro', () => {
  it('debería redireccionar a muro', () => {
  const divRegister= register();
  //1)pintar  de registro
  //2)llenara campo correo y clave 
  //3)dar clic en el bóton
  //4) después del registro validar el redireccionamiento
  });
});*/
