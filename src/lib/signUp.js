export default () => {
    const viewSignUp = `<form id="signUpForm">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <input type="submit" value="Sign Up">

  </form>`

  const signUp_container = document.createElement('div');
  signUp_container.innerHTML = viewSignUp;
  /*let formSignUp = signUp_container.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('cargando')
  })*/
  return signUp_container;
}