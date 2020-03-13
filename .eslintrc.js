module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
  ],
  'env': {
    'jest/globals': true,
    'node': true,
    'es6': true,
  },
  'ecmaFeatures': {
    'jsx': true,
  },
  'rules': {
    'react/jsx-uses-react': [1],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
};
