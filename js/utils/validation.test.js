import { expect, describe } from 'vitest';
import { validateUsername } from './validation.js';
describe('validateUsername', () => {
  it('returns true for username with 3 characters', () => {
    const username = 'joe';
    const result = validateUsername(username);
    expect(result).toBe(true);
  });

  it('returns true for username with more than 3 characters', () => {
    const username = 'jenny';
    const result = validateUsername(username);
    expect(result).toBe(true);
  });

  it('return false for username with less than 3 characters', () => {
    const username = 'bo';
    const result = validateUsername(username);
    expect(result).toBe(false);
  });
});
