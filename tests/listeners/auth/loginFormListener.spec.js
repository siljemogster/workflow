import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('login', () => {
  test('user can login with valid credentials', async ({ page }) => {
    await page.goto('/login/');

    await page.waitForLoadState('networkidle');

    await page.waitForSelector('input[name="email"]', { timeout: 5000 });

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);

    await page.click('button[type="submit"], button:has-text("Login")');

    await expect(page.locator('button:has-text("Logout")')).toBeVisible({
      timeout: 5000,
    });
  });

  test('an error message is shown with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login/');

    await page.waitForLoadState('networkidle');

    await page.waitForSelector('input[name="email"]', { timeout: 5000 });

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', 'ugyldigPassord123');

    await page.click('button[type="submit"], button:has-text("Login")');

    await expect(
      page.locator('#message-container, .error, [data-testid="error-message"]')
    ).toBeVisible({ timeout: 5000 });
  });
});
