import { test, expect } from '@playwright/test';

test.describe('venue navigation', () => {
  test('can navigate to venue details from home page', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await page.waitForSelector(
      '.venue-card, article, .card, [data-testid="venue-item"]',
      { timeout: 10000, state: 'visible' }
    );

    await page.click(
      '.venue-card:first-child, article:first-child, .card:first-child, [data-testid="venue-item"]:first-child'
    );

    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1, h2, h3, .heading')).toContainText(
      'Venue details',
      { timeout: 5000 }
    );
  });
});
