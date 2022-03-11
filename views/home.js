export default () => {
    const viewHome = `
    <h1>THE DAILY PROPHET</h1>
       <H2> WELCOME WIZARDS</H2>
       <div class="main__div--Login">
           <input type="text" placeholder="Email" id="email">
           <br class="espacio">
           <input type="text" placeholder="Password" id="password">
           <p>REVELIO The Daily Prophet</p>
           <button class="join"> Join </button>
           <p><hr>or<hr></p>
           <p>Continue with Google</p><!-- Imagen e icono  -->         
        </div>
       <p>Already a member? ALOHOMORA</p>
       <button class="Login"> Login </button> `

    const divElem = document.createElement("div")
    divElem.innerHTML = viewHome

    return divElem;

}





