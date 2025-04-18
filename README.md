## Workflow CA

This is a project for the Workflow Course Assignment that focuses on improving the development process through configuration of various tools and tests.

## Features / User Stories

- User can register
- User can login
- User can browse venues
- User can view venue details

## Setup

To install dependencies:

```bash
npm install

To run the project in development mode:

bash
Copy
Edit
npm start
Required Environment Variables
The following environment variables are necessary to run the E2E tests:

TEST_USER_EMAIL - Email address for the test account

TEST_USER_PASSWORD - Password for the test account

Available Scripts
npm start - Starts the development server with live-server on port 5500

npm test - Runs Vitest unit tests

npm run lint - Runs ESLint to check code standards

npm run lint:fix - Runs ESLint and fixes problems automatically when possible

npm run format - Formats the code with Prettier

npx playwright test - Runs Playwright E2E tests

npx playwright test --ui - Runs Playwright tests with UI mode for debugging

Test Setup
Unit Tests
The project uses Vitest for unit testing. The tests cover:

isActivePath function

getUserName function

To run unit tests:

bash
Copy
Edit
npm test
End-to-End Tests
The project uses Playwright for E2E testing. The tests cover:

Authentication
Successful login with valid credentials

Error message displayed with invalid credentials

Navigation
Navigation from the home page to venue details

To run E2E tests:

bash
Copy
Edit
npx playwright test
Code Quality Tools
The project uses the following tools to ensure code quality:

ESLint - for code standards

Prettier - for code formatting

Husky - for pre-commit hooks
```
