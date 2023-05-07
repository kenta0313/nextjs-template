"use strict";

module.exports = {
  env: {
    es6: true,
    jquery: true,
    node: true,
    browser: true,
  },
  globals: {
    window: true,
    document: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["jest", "react", "prettier", "@typescript-eslint", "import"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: { version: "16.8.6" },
  },
};
