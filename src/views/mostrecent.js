export default () => {
  const viewMostRecent = `  
    <section id="login-user">
      MOST RECENT
    </section>
          `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewMostRecent;
  return divElement;
};