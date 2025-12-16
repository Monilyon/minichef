import { getIsAuthenticated } from './state.js';
import { loadView } from './views.js';
import { showConfirmationPopup } from './utils.js';

// Navigate between views
export function navigate(view, id = null) {
  // Prevent access to protected views if the user is not authenticated
  if (!getIsAuthenticated() && view !== 'login') {
    const userConfirmed = showConfirmationPopup(
      'Debes iniciar sesión para acceder a esta página. Redireccionando a la pantalla de inicio de sesión. ¿Quieres continuar?'
    );

    // If the user confirms, redirect to login using navigate itself
    if (userConfirmed) {
      navigate('login');
    }
    return; // Stop further execution
  }

  // Build the path and update the browser's history
  const path = id ? `/${view}/${id}` : `/${view}`;
  history.pushState({ view, id }, '', path);

  // Load the requested view
  loadView(view, id);
}
