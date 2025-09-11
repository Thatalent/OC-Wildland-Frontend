import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from '@typescript-eslint/eslint-plugin'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      'eslint:recommended',
      '@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignores: ['dist'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
