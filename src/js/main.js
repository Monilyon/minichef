import './bootstrap.js';
import { setIsAuthenticated, getIsAuthenticated } from './state.js';
import { navigate } from './navigation.js';
import { loadView } from './views.js';
import { showConfirmationPopup } from './utils.js';
import { setupNavbar } from './components/navbar.js';
import { setupFooter } from './components/footer.js';

setupNavbar();
setupFooter();
// Add functionality to the Logout button
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (showConfirmationPopup('¿Quieres cerrar sesión?')) {
    setIsAuthenticated(false); // Reset authentication status
    navigate('login'); // Navigate to the login view
  }
});

// Handle navigation in the browser's history
window.addEventListener('popstate', (event) => {
  // event.preventDefault();
  const { view = '', id = null } = event.state || {};
  

  // Handle navigation to login while authenticated
  if (view === 'login' && getIsAuthenticated()) {
    const userConfirmed = showConfirmationPopup(
      'Al navegar a la pantalla de inicio de sesión, se cerrará la sesión. ¿Desea continuar?'
    );

    if (!userConfirmed) {
      // Cancel navigation by restoring the last valid state
      const lastState = history.state || { view: 'home' };
      navigate(lastState.view, lastState.id);
      return;
    }

    setIsAuthenticated(false); // Reset authentication
  }

  // Redirect unauthenticated users to login
  if (!getIsAuthenticated() && view !== 'login') {
    navigate('login');
    return; // Ensure no further execution
  }
  
  loadView(view, id);    

  // Load the requested view
});

// Initialize navigation on page load
navigate('login');
