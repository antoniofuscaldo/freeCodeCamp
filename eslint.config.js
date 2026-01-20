import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default [
  { ignores: ['node_modules/', 'dist/'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      sourceType: 'module',
    },
    rules: {
      'no-unreachable': 'off',
    },
  },
  {
    files: ['src/**/*.js', 'src/**/*.mjs'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['src/Front End Development Libraries/**/*.js'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
  prettier,
];
