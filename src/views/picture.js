export default () => {
  const viewPicture = `  
    <section id="login-user">
      PICTURE
    </section>
          `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewPicture;
  return divElement;
};