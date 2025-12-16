/**
 * Toggles the visibility of the Logout button.
 * @param {boolean} show - Determines whether to show or hide the Logout button.
 */
export function toggleLogoutButton(show) {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.style.display = show ? 'block' : 'none';
}

/**
 * Displays a confirmation popup with a custom message.
 * @param {string} message - The message to display in the popup.
 * @returns {boolean} - Returns true if the user confirms, false otherwise.
 */
export function showConfirmationPopup(message) {
  return window.confirm(message); // Display the confirmation dialog
}

export function toggleNavbar(show) {
  const navbar = document.getElementById('navbar');
  navbar.style.display = show ? 'block' : 'none';
}