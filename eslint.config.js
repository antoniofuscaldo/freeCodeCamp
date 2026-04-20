import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import importX from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // Ignori globali
  globalIgnores(['dist/', 'node_modules/', '.astro/']),

  // Regole base JavaScript
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  // Regole TypeScript (strict + stylistic)
  {
    files: ['**/*.{ts,tsx,mjs,js,jsx}'],
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
  },

  // Regole Astro (all + accessibility strict)
  ...eslintPluginAstro.configs.all,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],

  // Parser TypeScript per i file Astro
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // Import ordering
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx,astro}'],
    plugins: {
      'import-x': importX,
    },
    rules: {
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import-x/no-duplicates': 'error',
    },
  },

  // Globals browser per gli script lato client
  {
    files: ['src/scripts/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Globals Node.js per gli script di build/tooling
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Prettier (deve essere l'ultimo — disabilita le regole di formatting)
  eslintConfigPrettier,
]);
