import { html } from 'lit-html';
import { navigate } from '../navigation.js';
import { setIsAuthenticated } from '../state.js';
import { validateLogin } from '../auth.js';

export const loginViewHTML = html`

  <div id="loginView" class="view h-100 w-100 mt-5">
    <form id="loginForm" class="d-flex align-items-center">
      <div  class="col-6">
        <h2 class="fs-1 text-primary mb-3">Login</h2>
        <p>¡Es hora de despertar al chef que llevas dentro!<br><br> Encuentra inspiración, descubre nuevas recetas y convierte cada comida en una experiencia deliciosa.</p>
      </div>
      <div class="col-6">
        <div class="my-5 mx-3">
          <label for="exampleFormControlInput1" class="form-label fw-bold">Username</label><br>
          <input class=" w-100" type="text" id="username" placeholder="Username" required />
        </div>
        <div class="mb-5 mx-3">
          <label for="exampleFormControlInput1" class="form-label fw-bold">Password</label><br>
          <input class=" w-100" type="password" id="password" placeholder="Password" required />
        </div>
          <button class="btn btn-primary text-light w-25 ">Login</button>
      </div>
    </form>
  </div>
`;


export function setupLogin() {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get user input values from the login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate user credentials
    const isValid = await validateLogin(username, password);
    if (isValid) {
      setIsAuthenticated(true); // Mark the user as authenticated
      navigate('home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
}
