import { html } from "lit-html";
import { navigate } from "../navigation";

export const cardComponentHtml = (item) => html`
  <div class="mi-card card col-3 h-80">
    <img src="${item.image}" class="altura-img card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text m-0">${item.tiempo}</p>
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text h-50">${item.description}</p>
      <div class="d-flex justify-content-between">
        <i  class="fa-solid fa-heart text-danger m-2 " style="cursor: pointer;" @click="${() => setFav(item)}" data-bs-toggle="tooltip"
        data-bs-placement="bottom"  title="Añadir a favoritos"></i>
        <a id="Boton" href="#" class="btn btn-primary " @click="${() => navigate('detail', item.id)}">Receta</a>
      </div>
    </div>
  </div>
`;

export function setFav(item) {
  item.favorito = true;
}