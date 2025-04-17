/**
 * Checks if the current path matches or includes the given href
 * @param {string} href - The href to check against the current path
 * @returns {boolean} - True if current path matches or includes the href
 */
export function isActivePath(href) {
    const currentPath = window.location.pathname;
    
    // Special case for root path
    if (href === '/' && (currentPath === '/' || currentPath.endsWith('/index.html'))) {
      return true;
    }
    
    // Exact match
    if (currentPath === href) {
      return true;
    }
    
    // Path includes the href (but not for root path to avoid matching everything)
    if (href !== '/' && currentPath.includes(href)) {
      return true;
    }
    
    return false;
  }