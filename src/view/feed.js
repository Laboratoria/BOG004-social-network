export default () => {
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('#sectionGrid').style.display = 'grid';
  const viewHome = `
 <h2 class='text.center'> feed</h2>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.classList.add('position');
  return divElem;
};
