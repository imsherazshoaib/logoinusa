module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier', 'import', 'module-resolver'],
  rules: {
    'react/prop-types': 2,
    'no-console': 1,
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
