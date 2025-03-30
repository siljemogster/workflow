module.exports = [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
          // Test globals
          describe: "readonly",
          it: "readonly",
          test: "readonly",
          expect: "readonly",
          beforeEach: "readonly",
          afterEach: "readonly",
          beforeAll: "readonly",
          afterAll: "readonly",
          jest: "readonly"
        }
      },
      rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
      }
    }
  ];
