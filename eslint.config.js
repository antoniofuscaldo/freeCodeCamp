import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  { ignores: ['node_modules/', 'dist/'] },
  js.configs.all,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.js', 'src/**/*.mjs'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  prettier,
];
