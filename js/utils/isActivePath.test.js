import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import { isActivePath } from './isActivePath';

describe('isActivePath', () => {
  // Store the original window.location
  const originalLocation = window.location;
  
  beforeEach(() => {
    // Create a mockup of window.location
    delete window.location;
    window.location = {
      pathname: ''
    };
  });
  
  it('returns true when current path matches href exactly', () => {
    window.location.pathname = '/about';
    expect(isActivePath('/about')).toBe(true);
  });
  
  it('returns true for root path when path is "/" or "/index.html"', () => {
    window.location.pathname = '/';
    expect(isActivePath('/')).toBe(true);
    
    window.location.pathname = '/index.html';
    expect(isActivePath('/')).toBe(true);
  });
  
  it('returns true when current path includes the href', () => {
    window.location.pathname = '/blog/posts/1';
    expect(isActivePath('/blog')).toBe(true);
  });
  
  it('returns false when paths don\'t match', () => {
    window.location.pathname = '/about';
    expect(isActivePath('/contact')).toBe(false);
  });
  
  // Restore the original window.location
  afterEach(() => {
    window.location = originalLocation;
  });
});