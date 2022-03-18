// import imagen from "./logo-nibbles.png";
export default () => {
    // console.log(imagen);
    const viewHome = `
    <img src="logo-nibbles.png" alt="logo-nibbles"/>
    <button id="loginBtn">Ingresa</button>
    <button id="createUserBtn">Crear cuenta</button>
    <p>Conéctate con</p>
    <img src="google.png" alt="ingresa-con-google">`;
 const divElem = document.createElement("div")
 divElem.innerHTML = viewHome
 divElem.classList.add("position")
 return divElem;
}