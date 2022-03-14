
export default () => {
    const divRegister = document.createElement("div");
    divRegister.setAttribute ("class", "container-div-register");
    const viewRegister = `
    <h1>THE DAILY PROPHET</h1>
       <H2> WELCOME WIZARDS</H2>
       <div class="main__div--Login">
           <input type="text" placeholder="Email" id="email">
           <br class="espacio">
           <input type="text" placeholder="Password" id="password">
           <p>REVELIO The Daily Prophet</p>
           <button id="join"> Join </button>
           <p><hr>or<hr></p>
           <p>Continue with Google</p><!-- Imagen e icono  -->         
        </div>
       <p>Already a member? ALOHOMORA</p>
       <a href="#/login"><button id="login" class="Login"> Login </button></a> `

    
    divRegister.innerHTML = viewRegister;
    //const btnRegister = divRegister.querySelector('#btn-register');
     
    return divRegister;


}
