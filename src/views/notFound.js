export default () => {
  const viewNotFound = `
    <h2 class="notFound">Not Found 404</h2>`;

  const divNotFound = document.createElement('div');
  divNotFound.innerHTML = viewNotFound;
  return divNotFound;
};
