export default () => {
  const viewPeople = `  
    <section id="login-user">
      PEOPLE
    </section>
          `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewPeople;
  return divElement;
};
