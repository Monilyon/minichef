import { html } from 'lit-html';
import { navigate } from '../navigation.js';

export const homeViewHTML = html`
<div id="homeView" class="view">  
  <div class="row justify-content-center text-center text-bg-secondary text-white pt-5 d-flex"style="background: url('img/img1.jpg') no-repeat center center/cover;">
    <div class="col-md-12 text-lg-center align-self-center p-5">
      <h2 class="text-uppercase text-decoration-underline">El secreto de una gran comida empieza aqui</h2>
      <h4 class="display-4 fw-bold">Inspírate, cocina y sorprende.</h4>
    </div>
  </div>
  <div class="text-center text-dark pt-5 ">
      <h2 class="fw-bold text-primary">Recomendacion del día</h2>
      <p class="mx-5">Una de las recetas españolas más tradicionales son los callos y, a lo largo de toda la península, encontramos diversas formas de prepararlos.</p>
  </div>
  <div class="m-5">
  <img src="img/captura 2.JPG" class="img-fluid" alt="comida">
  </div>
</div>
`;

export function setupHome() {
  document.getElementById('recetas').addEventListener('click', () => {
    navigate('list'); // Navigate to the list view
  });

  document.getElementById('favoritos').addEventListener('click', () => {
    navigate('template'); // Navigate to the template view
  });
}
