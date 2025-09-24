const allowedExtensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: allowedExtensions },
      typescript: { alwaysTryTypes: true },
    },
  },
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
      },
    ],
  },
};
