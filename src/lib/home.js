// aqui exportaras las funciones que necesites

export const home = () => {
  let template =`
  <img src="image/logo11.png" alt="">
  <button id="register1">¡REGISTRARTE!</button>
  <button id="login1">INICIAR SESIÓN</button>`
  
  const divElement = document.createElement('div');
  divElement.classList.add('view1');
  divElement.innerHTML=template;
  
   
  
  
  return divElement;
}












//esto es lo que teniamos
/*export const home = () => {
  let template =`
    <img src="image/logo11.png" alt="">
    <button id="register1">¡REGISTRARTE!</button>
    <button id="login1">INICIAR SESIÓN</button>`
  let container = document.createElement('section')
  container.classList.add('view1')
  container.innerHtml=template
  // aqui tu codigo
  console.log('Hola mundo!');
  return container
};
*/
