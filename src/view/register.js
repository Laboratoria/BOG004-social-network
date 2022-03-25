import { register } from '../lib/auth.js';

const createFormUser = () => {
  const divElem = document.createElement('div');
  const viewCreateUser = `<h2 class='text-center'>Crea una cuenta en Nibbles</h2>`;
  divElem.innerHTML = viewCreateUser;
  const htmlFormRegister = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'register-form');

    // const fullName = document.createElement('input');
    // fullName.setAttribute('type', 'text');
    // fullName.setAttribute('name', 'fullname');
    // fullName.setAttribute('placeholder', 'Nombre Completo');
    // fullName.setAttribute('class', 'formulario');
    // fullName.setAttribute('autocomplete', 'off');

    const email = document.createElement('input');

    email.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'correo');
    email.setAttribute('id', 'register-email');
    email.setAttribute('class', 'formulario' );
    email.setAttribute('autocomplete', 'off');
    
    

    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', 'contraseña');
    password.setAttribute('id', 'register-password');
    password.setAttribute('class', 'formulario');
    password.setAttribute('autocomplete', 'off');

    const repeatPassword = document.createElement('input');
    repeatPassword.setAttribute('type', 'password');
    repeatPassword.setAttribute('name', 'repeatpassword');
    repeatPassword.setAttribute('placeholder', ' repite la contraseña');
    repeatPassword.setAttribute('id', 'register-repeat-password');
    repeatPassword.setAttribute('class', 'formulario');
    repeatPassword.setAttribute('autocomplete', 'off');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'registrarse');
    submit.setAttribute('class', 'btn-submit');

    // form.appendChild(fullName);

    form.appendChild(email);

    form.appendChild(password);

    form.appendChild(repeatPassword);

    form.appendChild(submit);

    divElem.appendChild(form);
  };
  htmlFormRegister();

  return divElem;
};

const saveUser = () => {
  const signupForm = document.querySelector('#register-form');
  const inputs = document.querySelectorAll('#register-form input:not([type="submit"])');

  const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    repeatpassword: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "email":
        if (expresiones.email.test(e.target.value)) {
          document.getElementById('register-email').classList.add('with-error');
          document.getElementById('register-email').classList.remove('with-error');
          // document.getElementById('register-email').classList.remove('remove-message-activo');

        


        } else {
          document.getElementById('register-email').classList.remove('with-error');
          document.getElementById('register-email').classList.add('with-error');
          // document.getElementById('register-email').classList.add('remove-message-activo');

        }
        break;
      case "password":
        if(expresiones.password.test(e.target.value)){
          document.getElementById('register-password').classList.add('with-error');
          document.getElementById('register-password').classList.remove('with-error');

        }else{
          document.getElementById('register-password').classList.remove('with-error');
          document.getElementById('register-password').classList.add('with-error');

        }
        break;
      case "repeatpassword":
        if(expresiones.repeatpassword.test(e.target.value)){
          document.getElementById('register-repeat-password').classList.add('with-error');
          document.getElementById('register-repeat-password').classList.remove('with-error');

        }else{
          document.getElementById('register-repeat-password').classList.remove('with-error');
          document.getElementById('register-repeat-password').classList.add('with-error');
      }
        break;
      // default:
      //   break;
    }
  }

  console.log(inputs);
  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);


  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    const repeatPassword = document.querySelector(
      '#register-repeat-password',
    ).value;
   
    console.log(email, password);
    if (password === repeatPassword) {
      register(email, password);
    } else {
      return 'la contraseña no coinciden';
    }
  });


};


export { createFormUser, saveUser };
