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
  globalIgnores(['dist/', 'build/', 'coverage/', 'node_modules/', '.astro/']),

  // Regole base JavaScript
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Nei progetti/esercizi FCC e Rosetta ci sono molte funzioni "entrypoint" non richiamate nello stesso file.
      'no-unused-vars': 'off',
    },
  },

  // Regole TypeScript (strict + stylistic)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    languageOptions: {
      parser: tsParser,
    },
  },

  // Regole Astro (all + accessibility strict)
  eslintPluginAstro.configs['flat/all'],
  eslintPluginAstro.configs['flat/jsx-a11y-strict'],

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

  // Prettier (deve essere l'ultimo — disabilita le regole di formatting)
  eslintConfigPrettier,
]);
