import{ html, render} from 'lit-html';
import { showConfirmationPopup } from '../utils';
import { setIsAuthenticated } from '../state';
import { navigate } from '../navigation';
export const navbarComponentHtml = () => html`
<div class="row bg-light">
  <div class="col-12 d-flex align-items-center justify-content-center h-25 ">
    <div class="logo w-25 ms-5 d-flex">
      <img src="img/newlogo sin fondo.png" class="img-fluid w-25" alt="logotipo">
      <h1 class="m-4 text-primary">Mini Chef</h1>
    </div>
    <nav id="navbar" class="navbar navbar-expand-lg" style="display:none">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-5 fw-3 gap-3">
          <li class="nav-item">
            <a id="home" class="nav-link fw-bold text-dark link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a id="recetas" class="nav-link fw-bold text-dark" href="#">
              Recetas
            </a>
          </li>
          <li id="favoritos" class="nav-item"><a class="nav-link fw-bold text-dark" href="#">
              Favoritos
            </a>
          </li>
        </ul>
        <button class="btn btn-outline-primary" type="submit" @click="${Handlelogout}">logout</button>
      </div>
    </nav>
  </div>
</div>
`;
function Handlelogout() {
  if (showConfirmationPopup('¿Quieres cerrar sesión?')) {
    setIsAuthenticated(false);
    navigate('login');
  }
}

export function setupNavbar() {
  const navbarContainer = document.getElementById('header');
  render(navbarComponentHtml(),navbarContainer);
}