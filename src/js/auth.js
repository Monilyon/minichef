/**
 * Validates login credentials against the users.json file.
 * @param {string} username - The username to validate.
 * @param {string} password - The password to validate.
 * @returns {Promise<boolean>} - Returns a promise that resolves to true if the credentials are valid, false otherwise.
 */
export async function validateLogin(username, password) {
  const response = await fetch('/mockdata/users.json');
  const users = await response.json();
  return users.some(
    (user) => user.username === username && user.password === password
  );
}
