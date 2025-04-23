import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { getUserName } from './getUserName';

describe('getUserName', () => {
  // Store the original localStorage
  const originalLocalStorage = global.localStorage;
  
  beforeEach(() => {
    // Create a mock of localStorage
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };
  });
  
  it('returns the name from the user object in storage', () => {
    // Mock a stored user
    const mockUser = { name: 'John Doe', email: 'john@example.com' };
    localStorage.getItem.mockReturnValue(JSON.stringify(mockUser));
    
    expect(getUserName()).toBe('John Doe');
    expect(localStorage.getItem).toHaveBeenCalledWith('user');
  });
  
  it('returns null when no user exists in storage', () => {
    // Mock empty storage
    localStorage.getItem.mockReturnValue(null);
    
    expect(getUserName()).toBe(null);
    expect(localStorage.getItem).toHaveBeenCalledWith('user');
  });
  
  // Restore the original localStorage
  afterEach(() => {
    global.localStorage = originalLocalStorage;
  });
});