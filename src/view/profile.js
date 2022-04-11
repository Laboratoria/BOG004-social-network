export default () => {
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  const viewProfile = `
 <h2 class='welcome-text'>Perfil</h2>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;
  divElem.classList.add('position');
  return divElem;
};
