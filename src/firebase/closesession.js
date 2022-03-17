import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const closeSession = () => {
  const auth = getAuth();
  signOut(auth)
    .then(
        ()=>{
            //nada
        }
    )
    .catch(
        (error)=>{
            //no deberia 
        }
    );
};

export default closeSession;
