export default () => {
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('#sectionGrid').style.display = 'grid';
  const search = `<div class='searchFeed'>
<form class='formFeed' id="feed-form">
 <input type='search' id='search-feed' class='inputsearch' placeholder='Explorar' required input/>
</form>
</div>
<div class='textBox'>
<form class='formtext' id='text-form'>
<textarea placeholder='escribe tu receta' id='text-feed' class='inputext'  required  maxlength='500'></textarea>
 `;
  const divFeed = document.createElement('div');
  divFeed.innerHTML = search;
  return divFeed;
};
