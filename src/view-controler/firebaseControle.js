import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from './firebase.js';

export function authenticate (email, password,) {
return createUserWithEmailAndPassword (auth, email, password,)
}

export function loginUser(email, password) {
return  signInWithEmailAndPassword(auth, email, password)
}
  
