import { render } from 'lit-html';
import { loginViewHTML, setupLogin } from './views/login.js';
import { homeViewHTML, setupHome } from './views/home.js';
import { listViewHTML, setupList } from './views/list.js';
import { detailViewHTML, setupDetail } from './views/detail.js';
import { templateViewHTML, setupTemplate } from './views/template.js';
import { toggleLogoutButton, toggleNavbar } from './utils.js';

export function loadView(view, id = null) {
  let html, setup;

  switch (view) {
    case 'login':
      console.log('esto es login');
      
      html = loginViewHTML;
      setup = setupLogin;
      break;
    case 'home':
      console.log('esto es home');      
      html = homeViewHTML;
      setup = setupHome;
      break;
    case 'list':
      console.log('esto es recetas');      
      html = listViewHTML;
      setup = setupList;
      break;
    case 'detail':
      html = detailViewHTML;
      setup = setupDetail.bind(null, id);
      break;
    case 'template':
      html = templateViewHTML;
      setup = setupTemplate;
      break;
    default:
      console.error(`View ${view} not found.`);
      return;
  }

  // Inject the HTML and run the setup logic
  const appContainer = document.getElementById('app');

  if (!appContainer) {
    console.error('App container not found!'); // Log an error if the container is missing
    return;
  }

  // Use lit-html's render function to inject the HTML content
  render(html, appContainer);

  // Toggle Logout button visibility (only show if not in login view)
  toggleLogoutButton(view !== 'login');

  toggleNavbar(view !== 'login');

  // Call the setup function to attach event listeners or initialize logic
  setup();
}
