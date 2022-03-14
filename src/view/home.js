export default () => {
    const viewHome = `
 <h2 class="text.center"> ¡Hola! ingresa o regístrate en Nibbles y descubre recetas saludables</h2>`;
 const divElem = document.createElement("div")
 divElem.innerHTML = viewHome
 divElem.classList.add("position")
 return divElem;
}