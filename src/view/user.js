import { register } from '../lib/auth.js'
 
const createFormUser = () => {
    const divElem = document.createElement("div");
    const viewCreateUser = `<h2 class="text.center"> Crea una cuenta en Nibbles</h2>`;
    divElem.innerHTML = viewCreateUser;
    const htmlFormRegister = () => {
 
        let titleForm = document.createElement("h3");
        titleForm.innerText = "Register";
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("id", "register-form");
 
        let fullName = document.createElement("input");
        fullName.setAttribute("type", "text");
        fullName.setAttribute("name", "fullName");
        fullName.setAttribute("placeholder", "Full Name");
 
        let email = document.createElement("input");
        email.setAttribute("type", "text");
        email.setAttribute("name", "email");
        email.setAttribute("placeholder", "E-Mail");
        email.setAttribute("id", "register-email");
 
 
        let password = document.createElement("input");
        password.setAttribute("type", "password");
        password.setAttribute("name", "password");
        password.setAttribute("placeholder", "Password");
        password.setAttribute("id", "register-password");
 
 
        let repeatPassword = document.createElement("input");
        repeatPassword.setAttribute("type", "password");
        repeatPassword.setAttribute("name", "RepeatPassword");
        repeatPassword.setAttribute("placeholder", "Repeat Password");
        repeatPassword.setAttribute("id", "register-repeat-password");
 
 
        let submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
 
        form.appendChild(fullName);
 
        form.appendChild(email);
 
        form.appendChild(password);
 
        form.appendChild(repeatPassword);
 
        form.appendChild(submit);
 
        divElem.appendChild(form);
    }
    htmlFormRegister();
 
 
    return divElem;
}
 
const saveUser = () => {
    const signupForm = document.querySelector("#register-form");
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#register-email").value;
        const password = document.querySelector("#register-password").value;
        const repeatPassword = document.querySelector("#register-repeat-password").value;
        console.log(email, password);
        if (password === repeatPassword) {
            register(email, password);
        } else {
            console.log("la contraseña no coinciden");
        }
    });
}
export { createFormUser, saveUser };