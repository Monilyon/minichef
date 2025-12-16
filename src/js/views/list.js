import { html, render } from 'lit-html';
import { navigate } from '../navigation.js';
import { cardComponentHtml } from '../components/card.js';

export var objects = [];

export const listViewHTML = html`
  <div id="listView" class="view">
    <div class="row text-white  pt-5 d-flex mb-5" style="background: url('img/Captura 3.JPG') no-repeat center center/cover; filter:opacity(85%);">
      <div class="col-md-12 text-lg-center align-self-center p-5">
        <h2 class="text-uppercase text-decoration-underline">Descubre deliciosas recetas</h2>
        <h4 class="display-4 fw-bold">Busca tus recetas favoritas</h4>
      </div>
    </div>
    <div id="itemList" class="row d-flex gap-4 justify-content-center flex-wrap"></div>
  </div>
`;

export function setupList() {
  document.getElementById('home').addEventListener('click', () => {
    navigate('home'); // Navigate back to the home view
  });

  loadListView();
}

// Fetch and render the list of objects
export async function loadListView() {
  try {
    const response = await fetch('/mockdata/objects.json');
    objects = await response.json();

    const itemList = document.getElementById('itemList');
    if (!itemList) {
      console.error('Item list container not found');
      return;
    }
    // Use lit-html to render the list
    render(
      html`
        ${objects.map((item) => html`
          ${cardComponentHtml(item)}`
      )}
        `,
      itemList
    );

  } catch (error) {
    console.error('Error loading the list of items:', error);
    const itemList = document.getElementById('itemList');
    if (itemList) {
      render(
        html`
          <li>Error loading items. Please try again later.</li>
        `,
        itemList
      );
    }
  }
}
