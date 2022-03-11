import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);
export async function submithandler(emailform, passwordform) {
 /* e.preventDefault();
 
  const nameform = e.target.name.value;
  const usuarioform = e.target.username.value;
  const emailform = e.target.email.value;
  const passwordform = e.target.password.value;

  console.log(nameform, usuarioform, emailform, passwordform)
*/

  const users = await createUserWithEmailAndPassword(auth, emailform, passwordform);
  console.log('user',users);
  console.log(emailform, passwordform)
}
const actionCodeSettings = {
  
  url: 'https://social-trip-d4874.firebaseapp.com/__/auth/action',
  
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

   





