export default () => {
  const viewHome = `
 <h2 class='text.center'> feed</h2>`;
 const divElem = document.createElement('div')
 divElem.innerHTML = viewHome
 divElem.classList.add('position')
 return divElem;
}