/**
 * Gets the username from the user object in localStorage
 * @returns {string|null} - The username or null if no user exists
 */
export function getUserName() {
    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
      return null;
    }
    
    try {
      const userObject = JSON.parse(storedUser);
      return userObject.name || null;
    } catch (error) {
      return null;
    }
  }