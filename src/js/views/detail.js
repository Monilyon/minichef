import { html, render } from 'lit-html';
import { navigate } from '../navigation.js';

export const detailViewHTML = html`
  <div id="detailView" class="view">
    <div id="itemDetails"></div>
    <button id="backToListBtn" class="btn btn-primary mb-5">Back to List</button>
  </div>
`;

export function setupDetail(id) {
  document.getElementById('backToListBtn').addEventListener('click', () => {
    navigate('list'); // Navigate back to the list view
  });

  loadDetailView(id);
}

// Fetch and render details of a specific object
async function loadDetailView(id) {
  try {
    const response = await fetch('/mockdata/objects.json');
    const objects = await response.json();
    const item = objects.find((i) => i.id === parseInt(id));


    if (!item) {
      render(
        html`
          <p>Item not found.</p>
        `,
        document.getElementById('itemDetails')
      );
      return;
    }

    render(
      html`
          <h2 class="col-12">${item.name}</h2>
        <div class="row d-flex flex-column text-lg-center align-self-center">
          <div class="h-50 w-100">
            <img src="${item.image}" alt="${item.name}" class="mb-3" />
          </div>
          <h3 class="col-12">Ingredientes</h3>
          <ul class="col-12">
            ${item.ingredientes.map(
        (ingrediente) => html`
                <li class="list-unstyled">${ingrediente.name}: ${ingrediente.quantity}</li>
              `)}
          </ul>
          <h3>Pasos</h3>
          <p class="text-start px-5">${item.pasos}</p>
        </div>
      `,
      document.getElementById('itemDetails')
    );
  } catch (error) {
    console.error('Error loading item details:', error);
    render(
      html`
        <p>Error loading details. Please try again later.</p>
      `,
      document.getElementById('itemDetails')
    );
  }
}
