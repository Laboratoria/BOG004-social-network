export default () => {
  const viewBooks = `  
    <section id="login-user">
      BOOKS
    </section>
          `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewBooks;
  return divElement;
};
