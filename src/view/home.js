import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
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
        location.hash = "#/login";
    });
    const createUsernBtn = container.querySelector("#createUserBtn");  
    createUsernBtn.addEventListener("click", () => {
        location.hash = "#/createUser";
    });
    const googleButton = container.querySelector(".googleLogo");
    const provider = new GoogleAuthProvider();
    googleButton.addEventListener("click", e => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("usuario ingresa");
            console.log(user);
            localStorage.setItem("token", token);
            localStorage.setItem("name", user.displayName);
            localStorage.setItem("creationTime", user.metadata.creationTime);
            localStorage.setItem("lastSignInTime", user.metadata.lastSignInTime);

            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                console.log("usuario ingresó por primera vez");
                location.hash = "#/profile";
            } else{
                console.log("usuario ya había ingresado");
                location.hash = "#/feed";
            }
            // location.hash = "#/interest";
            // ...
        })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    })
})
 return container;
}