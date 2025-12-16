// Global state object
const state = {
  isAuthenticated: false, // Tracks user authentication status
};

// Getters
export function getIsAuthenticated() {
  console.log('estado: ', state.isAuthenticated);  
  return state.isAuthenticated;
}

// Setters
export function setIsAuthenticated(value) {
  state.isAuthenticated = value;
}
