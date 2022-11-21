const config = {
  env: {
    es2022: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-sort-props': 'warn',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
  }
}

module.exports = config
