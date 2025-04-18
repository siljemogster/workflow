// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Load environment variables from .env file
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for */
  timeout: 45000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met
     */
    timeout: 8000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry tests on failure */
  retries: process.env.CI ? 2 : 1,
  /* Use fewer workers to prevent resource competition */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use */
  reporter: 'html',
  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: 'http://localhost:5500',
    /* Action timeouts */
    actionTimeout: 8000,
    navigationTimeout: 12000,
    /* Collect trace, screenshots and video when retrying the failed test */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  /* Run local dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5500',
    reuseExistingServer: !process.env.CI,
    timeout: 90000, // Give the server more time to start
  },
});
