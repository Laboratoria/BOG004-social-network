export const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

export const campos = {
    name: false,
    email: false,
    password: false,

};

export const validateField = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document
            .getElementById(`group__${campo}`)
            .classList.remove('form__group-incorrect');
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
        campos[campo] = true;
    } else {
        document
            .getElementById(`group__${campo}`)
            .classList.add('form__group-incorrect');
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