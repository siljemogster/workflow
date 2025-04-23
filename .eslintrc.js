module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  globals: {
    vi: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
