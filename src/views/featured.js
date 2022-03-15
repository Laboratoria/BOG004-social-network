export default () => {
  const viewFeatured = `  
    <section id="login-user">
      FEATURED
    </section>
          `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewFeatured;
  return divElement;
};
