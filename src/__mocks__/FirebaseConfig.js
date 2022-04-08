export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = () => Promise.resolve({});

export const signInWithEmailAndPassword = (email, password) => new Promise ((resolve, reject) => {
    if(email === 'roxy@hotmail.com' && password === 'contraseña'){
        resolve({});
    } else {
        reject(
          document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
          document.querySelector('#atencion').style.display = 'flex';
        )
    }
});

export const GoogleAuthProvider = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
