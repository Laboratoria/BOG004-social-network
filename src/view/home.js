
export default () => {
    const container = document.createElement("div");
    container.classList.add("container");

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("leftColumn");
    const viewLeft = `
    <img id="homeImg" src="../img/home-img.png" alt="boot_image">
    `;
    leftColumn.innerHTML = viewLeft;
    container.appendChild(leftColumn);

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("rightColumn");
    const viewRight = `
    <img id="nibblesLogo" src="../img/nibblesLogo.png" alt="logo-nibbles">
    <button id="loginBtn">Ingresa</button>
    <button id="createUserBtn">Crear cuenta</button>
    <p>Conéctate con</p>
    <hr class="divider">
    <img class="googleLogo "src="../img/google.png" alt="ingresa-con-google">`;
    rightColumn.innerHTML = viewRight;
    container.appendChild(rightColumn);

    const loginBtn = container.querySelector("#loginBtn");  
    loginBtn.addEventListener("click", () => {
        console.log("hola");
        location.hash = "#/login";
    });
    const GooglenBtn = container.querySelector("#googleLogo");  
    loginBtn.addEventListener("click", () => {
     console.log("hola");
    })
 return container;
}