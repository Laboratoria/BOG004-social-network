import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);
export async function submithandler(email, password) {
  const users = await createUserWithEmailAndPassword(auth, email, password);
  return users;
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

   





