export default () => {
  const viewBlogs = `
    <section id="blog-user">
      BLOGS
    </section>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewBlogs;
  return divElement;
};
