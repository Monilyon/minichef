import { html, render } from 'lit-html';
import { cardComponentHtml } from '../components/card';
import { objects } from '../views/list';

export const templateViewHTML = html`
  <div id="templateView" class="view">
    <h1 class="d-flex justify-content-center p-3" style="background: url('img/fav.JPG') no-repeat center center/cover; filter:opacity(50%);">Tus recetas favoritas</h1>
    <div id="favoriteList" class="row d-flex gap-4 justify-content-center flex-wrap my-5"></div>
  </div>
`;

export function setupTemplate() {

  loadTemplateView();
}
function loadTemplateView() {
  const favoriteList = document.getElementById('favoriteList');

  console.log(objects);
  try {
    if (favoriteList) {
      console.log('hay', favoriteList);

      render(
        html`
            ${favs().map((item) => html`
              ${cardComponentHtml(item)}`
        )}
            `,
        favoriteList
      );
    }
  } catch (error) {
    console.error('Error loading the list of items:', error);
    render(
      html`
          <h1 h1 > La seccion de favoritos</h1 >
        <p>Actualmente está vacia. Puedes agregar tus recetas favoritas desde el apartado recetas, haciendo click sobre el icono heart</p>  
    `,
      favoriteList);

  }
}

function favs() {
  console.log(objects.filter((item) => { return item.favorito == true }));

  return objects.filter((item) => { return item.favorito == true });

}