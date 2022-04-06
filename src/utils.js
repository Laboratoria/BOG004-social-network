export const expresiones = { // Expresiones regulares
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. Máximo 40 caracteres.
  password: /^.{6,15}$/, // 6 a 15 digitos. Máximo 15 caracteres.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo electrónico.
};

export const campos = { // Campos del formulario.
  name: false,
  email: false,
  password: false,
};

export const validateField = (expresion, input, campo) => { // Función que valida un campo.
  if (expresion.test(input.value)) { // Si la expresión regular es verdadera.
    document // Seleccionamos el elemento del DOM.
      .getElementById(`group__${campo}`) // Seleccionamos el grupo del campo.
      .classList.remove('form__group-incorrect'); // Quitamos la clase de error.
    document
      .getElementById(`group__${campo}`)
      .classList.add('form__group-right');
    document
      .querySelector(`#group__${campo} i`)
      .classList.add('fa-check-circle');
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove('fa-times-circle');
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.remove('form__input-error-active');
    campos[campo] = true; // Campo validado.
  } else { // Si la expresión regular es falsa.
    document // Seleccionamos el elemento del DOM.
      .getElementById(`group__${campo}`) // Seleccionamos el grupo del campo.
      .classList.add('form__group-incorrect'); // Agregamos la clase de error.
    document
      .getElementById(`group__${campo}`)
      .classList.remove('form__group-right');
    document
      .querySelector(`#group__${campo} i`)
      .classList.add('fa-times-circle');
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove('fa-check-circle');
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.add('form__input-error-active');
    campos[campo] = false;
  }
};
