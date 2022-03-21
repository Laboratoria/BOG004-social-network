// aqui exportaras las funciones que necesites

export const home = () => {
  const divElement = document.createElement('div');
  const template = `
  <img src='image/logo1.png' alt='social-trip1-png'>
  <button id="register1">¡REGISTRARTE!</button>
  <button id="login1">INICIAR SESIÓN</button> `;

  divElement.classList.add('view1');
  divElement.innerHTML = template;

  const btnregister = divElement.querySelector('#register1')
  const btnlogin = divElement.querySelector('#login1')

  btnregister.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/#register'});
  
  btnlogin.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/#login'});  




  return divElement;
};
